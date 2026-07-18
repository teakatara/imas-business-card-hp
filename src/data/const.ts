import businessCardBackFaceImage from "@/assets/imgs/business-cards/名刺サイズの画像2.png";
import businessCardFrontFaceImage from "@/assets/imgs/business-cards/名刺サイズの画像.png";
import CINDERELLA_GIRLS_STAGELIVE_ICON_IMAGE from "@/assets/imgs/game-icons/CINDERELLA-GIRLS_STARLIGHT-STAGE.png";
import Gakuen_ICON_IMAGE from "@/assets/imgs/game-icons/Gakuen.png";
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
    note: "仮名刺1",
    businessCardFrontFaceImageSrc: businessCardFrontFaceImage,
    businessCardBackFaceImageSrc: businessCardBackFaceImage,
  },
  {
    note: "仮名刺2",
    businessCardFrontFaceImageSrc: businessCardFrontFaceImage,
    businessCardBackFaceImageSrc: businessCardBackFaceImage,
  },
  {
    note: "仮名刺3",
    businessCardFrontFaceImageSrc: businessCardFrontFaceImage,
    businessCardBackFaceImageSrc: businessCardBackFaceImage,
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
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: CINDERELLA_GIRLS_STAGELIVE_ICON_IMAGE,
    brand: "CG",
  },
  {
    title: "アイドルマスター ミリオンライブ！ シアターデイズ",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: MILLION_LIVE_THEATER_DAYS_ICON_IMAGE,
    brand: "ML",
  },
  {
    title: "アイドルマスター シャイニーカラーズ",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: SHINY_COLORS_ICON_IMAGE,
    brand: "SC",
  },
  {
    title: "アイドルマスター シャイニーカラーズ Song for Prism",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: SHINY_COLORS_SFP_ICON_IMAGE,
    brand: "SC",
  },
  {
    title: "学園アイドルマスター",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: Gakuen_ICON_IMAGE,
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
