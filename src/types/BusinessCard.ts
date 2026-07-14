import type { Ref } from "vue";

/**
 * 名刺情報の型定義
 */
export interface BusinessCardInfo {
  /** 名刺のメモ */
  note: string;
  /** 名刺の表面画像のURL */
  businessCardFrontFaceImageSrc: string;
  /** 名刺の裏面画像のURL */
  businessCardBackFaceImageSrc: string;
}

/**
 * 名刺情報に状態を追加した型定義
 */
export interface BusinessCardInfoWithState extends BusinessCardInfo {
  /** 名刺のインデックス */
  index: number;
  /** 名刺の表面が表示されているかどうか */
  isFrontFaceVisible: Ref<boolean>;
  /** 名刺の表面・裏面を切り替えるための関数 */
  onClickToggleFace: () => void;
}

/**
 * 名刺カルーセルのオプションの型定義
 */
export interface BusinessCardCarouselOptions {
  /** オリジナルの名刺リスト */
  originalBusinessCardList: BusinessCardInfo[];
  /** 表示用の名刺リスト */
  businessCardList: BusinessCardInfoWithState[];
}
