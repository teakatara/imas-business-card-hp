import type { Brand } from "@/types/Brand";

/**
 * ブランド識別子からブランドロゴのパスを取得する
 * @param brand ブランド識別子
 * @returns ブランドロゴのパス
 */
export const getBrandIconPath = (brand: Brand): string => {
  switch (brand) {
    case "AS":
      return "/src/assets/imgs/brand-icons/AS.png";
    case "CG":
      return "/src/assets/imgs/brand-icons/CG.png";
    case "ML":
      return "/src/assets/imgs/brand-icons/ML.png";
    case "SM":
      return "/src/assets/imgs/brand-icons/SM.png";
    case "SC":
      return "/src/assets/imgs/brand-icons/SC.png";
    case "Gk":
      return "/src/assets/imgs/brand-icons/Gk.png";
    default:
      return "";
  }
};