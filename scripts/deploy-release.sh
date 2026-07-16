#!/usr/bin/env sh
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
WT_DIR="$ROOT_DIR/.deploy-release-worktree"
BRANCH="${DEPLOY_BRANCH:-release}"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: $DIST_DIR が存在しません。先に build を実行してください。" >&2
  exit 1
fi

if ! git -C "$ROOT_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: Git リポジトリ内で実行してください。" >&2
  exit 1
fi

cleanup() {
  git -C "$ROOT_DIR" worktree remove --force "$WT_DIR" >/dev/null 2>&1 || true
  rm -rf "$WT_DIR"
}

trap cleanup EXIT INT TERM

git -C "$ROOT_DIR" worktree prune >/dev/null 2>&1 || true
cleanup

if git -C "$ROOT_DIR" show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git -C "$ROOT_DIR" worktree add -f -B "$BRANCH" "$WT_DIR" "$BRANCH" >/dev/null
else
  git -C "$ROOT_DIR" worktree add --detach "$WT_DIR" >/dev/null
  git -C "$WT_DIR" checkout --orphan "$BRANCH" >/dev/null 2>&1
fi

find "$WT_DIR" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
cp -R "$DIST_DIR"/. "$WT_DIR"/

git -C "$WT_DIR" add -A

if git -C "$WT_DIR" diff --cached --quiet; then
  echo "No changes to deploy."
else
  git -C "$WT_DIR" -c user.name="deploy-bot" -c user.email="deploy-bot@local" commit -m "Deploy $(date -u +'%Y-%m-%d %H:%M:%S UTC')" >/dev/null
  echo "Created commit on local branch: $BRANCH"
fi
