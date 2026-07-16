import type { Brand } from "@/types/Brand";

/**
 * ブランド識別子からブランドロゴのパスを取得する
 * @param brand ブランド識別子
 * @returns ブランドロゴのパス
 */
export const getBrandIconPath = (brand: Brand): string => {
  switch (brand) {
    case "AS":
      return new URL("../assets/imgs/brand-icons/AS.png", import.meta.url).href;
    case "CG":
      return new URL("../assets/imgs/brand-icons/CG.png", import.meta.url).href;
    case "ML":
      return new URL("../assets/imgs/brand-icons/ML.png", import.meta.url).href;
    case "SM":
      return new URL("../assets/imgs/brand-icons/SM.png", import.meta.url).href;
    case "SC":
      return new URL("../assets/imgs/brand-icons/SC.png", import.meta.url).href;
    case "Gk":
      return new URL("../assets/imgs/brand-icons/Gk.png", import.meta.url).href;
    default:
      return "";
  }
};

/**
 * 画像パスから画像のURLを取得する
 * @param imageSrc 画像パス
 * @returns 画像のURL
 */
export const getImagePath = (imageSrc: string): string => {
  return new URL(imageSrc, import.meta.url).href;
};
