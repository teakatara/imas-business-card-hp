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
  ALL: "#000000",
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
    title: "VOY@GER",
    artist: "THE IDOLM@STER FIVE STARS!!!!!",
    brand: "ALL",
  },
  {
    title: "CRYST@LOUD",
    artist: "天海春香, 渋谷凛, 伊吹翼, 天道輝, 八宮めぐる",
    brand: "ALL",
  },
  {
    title: "アイシテの呪縛～Je vous aime～",
    artist: "如月千早, 秋月律子, 三浦あずさ, 四条貴音, 神崎蘭子, 最上静香, 白石紬, 白瀬咲耶, 杜野凛世, 奥空心白",
    brand: "ALL",
  },
  {
    title: "恋をはじめよう",
    artist: "Jupiter",
    brand: "ALL",
  },
  {
    title: "REALIZE！！！",
    artist: "プロジェクト・フェアリー",
    brand: "ALL",
  },
  {
    title: "エクストリーム・オーバードライブ",
    artist: "玲音",
    brand: "ALL",
  },
  {
    title: "GO MY WAY!!",
    artist: "天海春香, 高槻やよい, 水瀬伊織",
    brand: "AS",
  },
  {
    title: "relations",
    artist: "星井美希, 如月千早",
    brand: "AS",
  },
  {
    title: "空",
    artist: "音無小鳥",
    brand: "AS",
  },
  {
    title: "メリー",
    artist: "天海春香, 如月千早, 高槻やよい, 菊地真, 星井美希",
    brand: "AS",
  },
  {
    title: "乙女よ大志を抱け！！",
    artist: "天海春香",
    brand: "AS",
  },
  {
    title: "arcadia",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "Next Life",
    artist: "我那覇響",
    brand: "AS",
  },
  {
    title: "リゾラ",
    artist: "水瀬伊織",
    brand: "AS",
  },
  {
    title: "Day of the future",
    artist: "星井美希",
    brand: "AS",
  },
  {
    title: "眠り姫",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "DIAMOND",
    artist: "水瀬伊織",
    brand: "AS",
  },
  {
    title: "READY!!",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "自分REST@RT",
    artist: "天海春香, 星井美希, 如月千早, 高槻やよい, 萩原雪歩, 菊地真, 双海真美, 四条貴音, 我那覇響",
    brand: "AS",
  },
  {
    title: "CHANGE!!!!",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "約束",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "私たちはずっと…でしょう?",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "We Have A Dream",
    artist: "天海春香, 如月千早, 星井美希, 高槻やよい, 萩原雪歩, 我那覇響",
    brand: "AS",
  },
  {
    title: "MUSIC♪",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "ビジョナリー",
    artist: "高槻やよい, 双海亜美, 双海真美, 水瀬伊織, 我那覇響",
    brand: "AS",
  },
  {
    title: "M@STERPIECE",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "虹色ミラクル",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "Fate of the World",
    artist: "天海春香, 星井美希, 如月千早",
    brand: "AS",
  },
  {
    title: "ONLY MY NOTE",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "Destiny",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "しっくりとゆっくりと",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "細氷",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "99 Nights",
    artist: "星井美希, 水瀬伊織, 四条貴音",
    brand: "AS",
  },
  {
    title: "ザ・ライブ革命でSHOW！",
    artist: "星井美希, 高槻やよい, 菊地真, 双海亜美, 双海真美, 四条貴音",
    brand: "AS",
  },
  {
    title: "紅白応援V",
    artist: "765PRO ALLSTARS ...and you!",
    brand: "AS",
  },
  {
    title: "Funny Logic",
    artist: "高槻やよい, 双海亜美, 双海真美",
    brand: "AS",
  },
  {
    title: "ToP!!!!!!!!!!!!!",
    artist: "765PRO ALLSTARS",
    brand: "AS",
  },
  {
    title: "Halftone",
    artist: "菊地真, 萩原雪歩",
    brand: "AS",
  },
  {
    title: "輝夜",
    artist: "如月千早",
    brand: "AS",
  },
  {
    title: "ショコラ・ティアラ",
    artist: "三村かな子",
    brand: "CG",
  },
  {
    title: "Naked Romance",
    artist: "小日向美穂",
    brand: "CG",
  },
  {
    title: "Twilight Sky",
    artist: "多田李衣菜",
    brand: "CG",
  },
  {
    title: "アップルパイ・プリンセス",
    artist: "十時愛梨",
    brand: "CG",
  },
  {
    title: "ミツボシ☆☆★",
    artist: "本田未央",
    brand: "CG",
  },
  {
    title: "お願い!シンデレラ",
    artist: "CINDERELLA GIRLS!!",
    brand: "CG",
  },
  {
    title: "熱血乙女Ａ",
    artist: "日野茜",
    brand: "CG",
  },
  {
    title: "Orange Sapphire",
    artist: "城ヶ崎莉嘉, 諸星きらり, 城ヶ崎美嘉, 本田未央, 赤城みりあ",
    brand: "CG",
  },
  {
    title: "花簪 HANAKANZASHI",
    artist: "小早川紗枝",
    brand: "CG",
  },
  {
    title: "ゴキゲンParty Night",
    artist:
      "三村かな子, 輿水幸子, 佐久間まゆ, 緒方智絵里, 小早川紗枝, 川島瑞樹, 白坂小梅, アナスタシア, 神谷奈緒, 北条加蓮, 十時愛梨, 日野茜, 高森藍子, 星輝子, 堀裕子",
    brand: "CG",
  },
  {
    title: "絶対特権主張しますっ !",
    artist: "十時愛梨, 日野茜, 高森藍子, 星輝子, 堀裕子",
    brand: "CG",
  },
  {
    title: "Memories",
    artist: "LOVE LAIKA",
    brand: "CG",
  },
  {
    title: "ØωØver!!",
    artist: "\\*(Asterisk)",
    brand: "CG",
  },
  {
    title: "Nocturne",
    artist: "高垣楓, 川島瑞樹, 松永涼, 速水奏, 新田美波",
    brand: "CG",
  },
  {
    title: "Absolute NIne",
    artist: "塩見周子, 高垣楓, 渋谷凛, 前川みく, 一ノ瀬志希, 島村卯月, 相葉夕美, 城ヶ崎美嘉, 向井拓海",
    brand: "CG",
  },
  {
    title: "Heart Voice",
    artist: "CANDY ISLAND with 輿水幸子",
    brand: "CG",
  },
  {
    title: "Wonder goes on!!",
    artist: "\\*(Asterisk) with なつなな(安部菜々＆木村夏樹)",
    brand: "CG",
  },
  {
    title: "Trancing Pulse",
    artist: "Triad Primus",
    brand: "CG",
  },
  {
    title: "青の一番星",
    artist: "塩見周子",
    brand: "CG",
  },
  {
    title: "Snow Wings",
    artist: "島村卯月, 渋谷凛, 本田未央, 大槻唯, 上条春菜",
    brand: "CG",
  },
  {
    title: "AnemoneStar",
    artist: "渋谷凛",
    brand: "CG",
  },
  {
    title: "純情Midnight伝説",
    artist: "向井拓海, 藤本里奈, 松永涼, 大和亜季, 木村夏樹",
    brand: "CG",
  },
  {
    title: "Near to You",
    artist:
      "中野有香, 一ノ瀬志希, 五十嵐響子, 櫻井桃華, 宮本フレデリカ, 塩見周子, 橘ありす, 鷺沢文香, 速水奏, 二宮飛鳥, 市原仁奈, 大槻唯, 片桐早苗, 姫川友紀, 相葉夕美",
    brand: "CG",
  },
  {
    title: "咲いてJewel",
    artist: "鷺沢文香, 速水奏, 橘ありす, 塩見周子, 二宮飛鳥",
    brand: "CG",
  },
  {
    title: "サマカニ！！",
    artist: "川島瑞樹, 日野茜, 堀裕子, 上田鈴帆, 難波笑美",
    brand: "CG",
  },
  {
    title: "BEYOND THE STARLIGHT",
    artist: "城ヶ崎莉嘉, 緒方智絵里, 北条加蓮, 川島瑞樹, 大槻唯",
    brand: "CG",
  },
  {
    title: "ラブレター",
    artist: "P.C.S",
    brand: "CG",
  },
  {
    title: "Yes! Party Time!!",
    artist: "島村卯月, 渋谷凛, 本田未央, 赤城みりあ, 安部菜々",
    brand: "CG",
  },
  {
    title: "Take me☆Take you",
    artist: "高垣楓, 三船美優, 森久保乃々, 島村卯月, 安部菜々, 前川みく, 依田芳乃, 本田未央, 佐藤心",
    brand: "CG",
  },
  {
    title: "桜の頃",
    artist: "依田芳乃, 小早川紗枝, 道明寺歌鈴, 浜口あやめ, 脇山珠美",
    brand: "CG",
  },
  {
    title: "不埒なCANVAS",
    artist: "輿水幸子, 塩見周子, 相葉夕美",
    brand: "CG",
  },
  {
    title: "Claw My Heart",
    artist: "早坂美玲",
    brand: "CG",
  },
  {
    title: "ダイアモンド・アテンション",
    artist: "喜多見柚, 難波笑美, 椎名法子, ナターリア, 脇山珠美",
    brand: "CG",
  },
  {
    title: "Brand new!",
    artist: "辻野あかり, 砂塚あきら, 桐生つかさ",
    brand: "CG",
  },
  {
    title: "Wish you Happiness!!",
    artist: "辻野あかり, 小早川紗枝, 安部菜々, 新田美波, ナターリア, 塩見周子, 浜口あやめ",
    brand: "CG",
  },
  {
    title: "MOTTO!",
    artist: "久川凪, 西園寺琴歌, 桐生つかさ, 白菊ほたる, 村上巴, 関裕美, 結城晴",
    brand: "CG",
  },
  {
    title: "スバル",
    artist: "大石泉, 乙倉悠貴, 多田李衣菜, 水本ゆかり, 神谷奈緒",
    brand: "CG",
  },
  {
    title: "あの子が街に来なサンタ",
    artist: "イヴ・サンタクロース",
    brand: "CG",
  },
  {
    title: "モラトリアム",
    artist: "夢見りあむ, 双葉杏",
    brand: "CG",
  },
  {
    title: "Fantasia for the Girls",
    artist: "久川颯, イヴ・サンタクロース, 白雪千夜, 神谷奈緒, 藤原肇, 依田芳乃, 赤城みりあ, 星輝子, 小早川紗枝",
    brand: "CG",
  },
  {
    title: "熱情エナモラル",
    artist: "依田芳乃, 村上巴, 佐藤心, 夢見りあむ, 久川凪",
    brand: "CG",
  },
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
export const X_ID = "tea_idolmaster";
