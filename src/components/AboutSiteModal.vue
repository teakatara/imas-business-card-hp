<script setup lang="ts">
import { ref } from "vue";

import { mdiClose } from "@mdi/js";

/** モーダルの開閉状態を管理 */
const isAboutModalOpen = ref<boolean>(false);

/** モーダルを開く */
const openAboutModal = (): void => {
  isAboutModalOpen.value = true;
};

/** モーダルを閉じる */
const closeAboutModal = (): void => {
  isAboutModalOpen.value = false;
};

defineExpose({
  openAboutModal,
  closeAboutModal,
});
</script>

<template>
  <v-dialog v-model="isAboutModalOpen" class="modal-wrap">
    <v-card>
      <v-card-title class="modal-header">
        <span>当サイトについて</span>
        <v-btn icon variant="text" aria-label="モーダルを閉じる" @click="closeAboutModal">
          <v-icon :icon="mdiClose" />
        </v-btn>
      </v-card-title>
      <v-card-text class="about-modal-content">
        <h3>サイトポリシー</h3>
        <p>当サイトは、当サイト開発者のプロデューサー(※1)としての自己を紹介するための非公式・非営利のサイトです。</p>
        <p>
          「アイドルマスター」や「アイドルマスター シンデレラガールズ」などの固有名詞及び各キャラクターの名称、<br />
          各ブランドのロゴや各キャラクターのイラスト・画像等は、株式会社バンダイナムコエンターテインメント様の登録商標・著作物です。
        </p>
        <p>当サイトと前述の企業様とは一切の関係性はありません。</p>
        <p>当サイトに掲載しているコンテンツの権利は、各権利者様に帰属します。</p>
        <p>
          各権利者様の判断で当サイトに問題が認められる場合は、お手数をおかけしますが<br />各権利者様ご本人より<a
            href="https://x.com/tea_idolmaster"
            target="_blank"
            rel="noopener noreferrer"
            >当サイト開発者のX</a
          >までご連絡くださいますようお願い申し上げます。
        </p>
        <p>
          オープンソースソフトウェアを除く、当サイトのソースコードの所有権及び知的財産権は、当サイト開発者に帰属します。
        </p>
        <p>※1：アイドルマスターシリーズのゲームをプレイするプレイヤーの通称</p>

        <h3>禁止事項</h3>
        <p>当サイトについて前述の企業様へ問い合わせる等の行為は、迷惑行為となりますのでご遠慮ください。</p>
        <p>当サイトの内容を転載・流用する行為は禁止いたします。</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="css" scoped>
.modal-wrap {
  max-height: 60vh;
  max-width: 80vw;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-modal-content {
  overflow-y: auto;
  text-align: left;
  overflow-wrap: anywhere;
  word-break: normal;
}
</style>
