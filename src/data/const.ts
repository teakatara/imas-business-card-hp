import IWSF_BACK_IMAGE from "@/assets/imgs/business-cards/IWSF2026/business-card-back.png";
import IWSF_FRONT_IMAGE from "@/assets/imgs/business-cards/IWSF2026/business-card-front.png";
import ACT_2_BACK_IMAGE from "@/assets/imgs/business-cards/ML10th-Act2/business-card-back.png";
import ACT_2_FRONT_IMAGE from "@/assets/imgs/business-cards/ML10th-Act2/business-card-front.png";
import ACT_3_BACK_IMAGE from "@/assets/imgs/business-cards/ML10th-Act3/business-card-back.png";
import ACT_3_FRONT_IMAGE from "@/assets/imgs/business-cards/ML10th-Act3/business-card-front.png";
import ACT_4_BACK_IMAGE from "@/assets/imgs/business-cards/ML10th-Act4/business-card-back.png";
import ACT_4_FRONT_IMAGE from "@/assets/imgs/business-cards/ML10th-Act4/business-card-front.png";
import CINDERELLA_GIRLS_STARLIGHT_STAGE_ICON_IMAGE from "@/assets/imgs/game-icons/CINDERELLA-GIRLS_STARLIGHT-STAGE.png";
import GAKUEN_ICON_IMAGE from "@/assets/imgs/game-icons/Gakuen.png";
import MILLION_LIVE_THEATER_DAYS_ICON_IMAGE from "@/assets/imgs/game-icons/MILLION-LIVE!_THEATER-DAYS.png";
import SHINY_COLORS_ICON_IMAGE from "@/assets/imgs/game-icons/SHINY-COLORS.png";
import SHINY_COLORS_SFP_ICON_IMAGE from "@/assets/imgs/game-icons/SHINY-COLORS_SONG-FOR-PRISM.png";
import type { Brand } from "@/types/Brand";
import type { BusinessCardInfo } from "@/types/BusinessCard";
import type { GameId } from "@/types/GameId";
import type { Music } from "@/types/Music";
import type { ProduceIdol } from "@/types/ProduceIdol";

export const P_NAME: string = "Tea";

export const BUSINESS_CARD_LIST: BusinessCardInfo[] = [
  {
    note: "Act-2",
    businessCardFrontFaceImageSrc: ACT_2_FRONT_IMAGE,
    businessCardBackFaceImageSrc: ACT_2_BACK_IMAGE,
  },
  {
    note: "IWSF2026",
    businessCardFrontFaceImageSrc: IWSF_FRONT_IMAGE,
    businessCardBackFaceImageSrc: IWSF_BACK_IMAGE,
  },
  {
    note: "Act-4",
    businessCardFrontFaceImageSrc: ACT_4_FRONT_IMAGE,
    businessCardBackFaceImageSrc: ACT_4_BACK_IMAGE,
  },
  {
    note: "Act-3",
    businessCardFrontFaceImageSrc: ACT_3_FRONT_IMAGE,
    businessCardBackFaceImageSrc: ACT_3_BACK_IMAGE,
  },
];

/** 各ブランドの色定義 */
export const BRAND_COLOR: Record<Brand, string> = {
  AS: "#f34f6d",
  CG: "#2681c8",
  ML: "#ffc30b",
  SM: "#0fbe94",
  SC: "#8dbbff",
  Gk: "#f39800",
};

export const GAME_ID_LIST: GameId[] = [
  {
    title: "アイドルマスター シンデレラガールズ スターライトステージ",
    gameId: "809649120",
    icon: CINDERELLA_GIRLS_STARLIGHT_STAGE_ICON_IMAGE,
    brand: "CG",
  },
  {
    title: "アイドルマスター ミリオンライブ！ シアターデイズ",
    gameId: "QUJW55MJ",
    icon: MILLION_LIVE_THEATER_DAYS_ICON_IMAGE,
    brand: "ML",
  },
  {
    title: "アイドルマスター シャイニーカラーズ",
    gameId: "xfZh7LXJQK",
    icon: SHINY_COLORS_ICON_IMAGE,
    brand: "SC",
  },
  {
    title: "アイドルマスター シャイニーカラーズ Song for Prism",
    gameId: "U8LSSKAYH",
    icon: SHINY_COLORS_SFP_ICON_IMAGE,
    brand: "SC",
  },
  {
    title: "学園アイドルマスター",
    gameId: "256JSYG8",
    icon: GAKUEN_ICON_IMAGE,
    brand: "Gk",
  },
];

export const LIKE_MUSIC_LIST: Music[] = [
  {
    title: "夢にかけるRainbow",
    artist: "765 MILLION ALLSTARS",
    brand: "ML",
  },
  {
    title: "瑠璃色金魚と花菖蒲",
    artist: "白石紬",
    brand: "ML",
  },
];

export const PRODUCE_IDOL_LIST: ProduceIdol[] = [
  {
    name: "水瀬伊織",
    brand: "AS",
  },
  {
    name: "依田芳乃",
    brand: "CG",
  },
  {
    name: "白石紬",
    brand: "ML",
  },
  {
    name: "杜野凛世",
    brand: "SC",
  },
  {
    name: "葛城リーリヤ",
    brand: "Gk",
  },
];

/** XのID */
export const xId = "tea_idolmaster";
