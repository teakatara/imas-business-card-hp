import type { Brand } from "@/types/Brand";

/**
 * アイドル情報の型定義
 */
export interface ProduceIdol {
  /** アイドルの名前 */
  name: string;
  /** 所属ブランド */
  brand: Brand;
  /** アイドルのアイコン画像のパス */
  icon?: string;
}
