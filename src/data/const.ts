import type { BusinessCardInfo } from "@/types/BusinessCard";
import type { GameId } from "@/types/GameId";
import type { Music } from "@/types/Music";

export const P_NAME: string = "ティー";

export const BUSINESS_CARD_LIST: BusinessCardInfo[] = [
  {
    note: "仮名刺1",
    businessCardFrontFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像.png",
    businessCardBackFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像2.png",
  },
  {
    note: "仮名刺2",
    businessCardFrontFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像.png",
    businessCardBackFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像2.png",
  },
  {
    note: "仮名刺3",
    businessCardFrontFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像.png",
    businessCardBackFaceImageSrc: "/src/assets/imgs/business-cards/名刺サイズの画像2.png",
  },
];

export const GAME_ID_LIST: GameId[] = [
  {
    title: "アイドルマスター シンデレラガールズ スターライトステージ",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: "/src/assets/imgs/game-icons/アプリアイコンサイズの画像.png",
    brand: "CG",
  },
  {
    title: "アイドルマスター ミリオンライブ！ シアターデイズ",
    gameId: "1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf1234567890qawsedrf",
    icon: "/src/assets/imgs/game-icons/アプリアイコンサイズの画像.png",
    brand: "ML",
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
  }
];