import type { IconValue } from "vuetify/lib/composables/icons.mjs";

import ALL from "@/assets/imgs/brand-icons/ALL.vue";
import AS from "@/assets/imgs/brand-icons/AS.vue";
import CG from "@/assets/imgs/brand-icons/CG.vue";
import Gk from "@/assets/imgs/brand-icons/Gk.vue";
import ML from "@/assets/imgs/brand-icons/ML.vue";
import SC from "@/assets/imgs/brand-icons/SC.vue";
import SM from "@/assets/imgs/brand-icons/SM.vue";
import { BRAND_COLOR } from "@/data/const";
import type { Brand } from "@/types/Brand";

/**
 * ブランド識別子からブランドロゴのパスを取得する
 * @param brand ブランド識別子
 * @returns ブランドロゴのパス
 */
export const getBrandIconPath = (brand: Brand | undefined): IconValue => {
  switch (brand) {
    case "AS":
      return AS;
    case "CG":
      return CG;
    case "ML":
      return ML;
    case "SM":
      return SM;
    case "SC":
      return SC;
    case "Gk":
      return Gk;
    default:
      return ALL;
  }
};

/**
 * ブランドに応じたホバー時の背景色を取得する
 * @param brand ブランド
 * @returns ブランドカラー
 */
export const getHoverBackgroundColor = (brand: Brand | undefined): string => {
  if (brand === undefined) {
    return "#000000";
  }

  return BRAND_COLOR[brand];
};

/**
 * 画像パスから画像のURLを取得する
 * @param imageSrc 画像パス
 * @returns 画像のURL
 */
export const getImagePath = (imageSrc: string): string => {
  return new URL(imageSrc, import.meta.url).href;
};
