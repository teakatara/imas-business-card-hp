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
    artist: "*(Asterisk)",
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
    artist: "*(Asterisk) with なつなな(安部菜々＆木村夏樹)",
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
    "title": "Thank You!",
    "artist": "765 MILLIONSTARS",
    "brand": "ML"
  },
  {
    "title": "Legend Girls!!",
    "artist": "天海春香, 天空橋朋花, 七尾百合子, 箱崎星梨花, 最上静香",
    "brand": "ML"
  },
  {
    "title": "Rebellion",
    "artist": "我那覇響",
    "brand": "ML"
  },
  {
    "title": "PRETTY DREAMER",
    "artist": "我那覇響, 春日未来, 豊川風花, 望月杏奈, 横山奈緒",
    "brand": "ML"
  },
  {
    "title": "ライアー・ルージュ",
    "artist": "北沢志保",
    "brand": "ML"
  },
  {
    "title": "Snow White",
    "artist": "如月千早",
    "brand": "ML"
  },
  {
    "title": "Blue Symphony",
    "artist": "如月千早, 北沢志保, 田中琴葉, 所恵美",
    "brand": "ML"
  },
  {
    "title": "Be My Boy",
    "artist": "百瀬莉緒",
    "brand": "ML"
  },
  {
    "title": "Sentimental Venus",
    "artist": "水瀬伊織, エミリー=スチュアート, 真壁瑞希, 百瀬莉緒",
    "brand": "ML"
  },
  {
    "title": "FIND YOUR WIND！",
    "artist": "流星群",
    "brand": "ML"
  },
  {
    "title": "Marionetteは眠らない",
    "artist": "星井美希, 伊吹翼, 北上麗花, ジュリア",
    "brand": "ML"
  },
  {
    "title": "チョー↑元気Show☆アイドルch@ng!",
    "artist": "松田亜利沙",
    "brand": "ML"
  },
  {
    "title": "フェスタ・イルミネーション",
    "artist": "徳川まつり",
    "brand": "ML"
  },
  {
    "title": "ハッピ～ エフェクト！",
    "artist": "宮尾美也",
    "brand": "ML"
  },
  {
    "title": "瞳の中のシリウス",
    "artist": "四条貴音, 高坂海美, 徳川まつり, 宮尾美也",
    "brand": "ML"
  },
  {
    "title": "dear...",
    "artist": "馬場このみ",
    "brand": "ML"
  },
  {
    "title": "Welcome!!",
    "artist": "765 MILLIONSTARS",
    "brand": "ML"
  },
  {
    "title": "合言葉はスタートアップ！",
    "artist": "レジェンドデイズ",
    "brand": "ML"
  },
  {
    "title": "Growing Storm!",
    "artist": "乙女ストーム！",
    "brand": "ML"
  },
  {
    "title": "...In The Name Of。 ...LOVE?",
    "artist": "真壁瑞希",
    "brand": "ML"
  },
  {
    "title": "Believe my change!",
    "artist": "伊吹翼",
    "brand": "ML"
  },
  {
    "title": "Shooting Stars",
    "artist": "クレシェンドブルー",
    "brand": "ML"
  },
  {
    "title": "サマ☆トリ ~Summer trip~",
    "artist": "北上麗花",
    "brand": "ML"
  },
  {
    "title": "絵本",
    "artist": "北沢志保",
    "brand": "ML"
  },
  {
    "title": "Catch my dream",
    "artist": "最上静香",
    "brand": "ML"
  },
  {
    "title": "Eternal Harmony",
    "artist": "エターナルハーモニー",
    "brand": "ML"
  },
  {
    "title": "プラリネ",
    "artist": "ジュリア",
    "brand": "ML"
  },
  {
    "title": "bitter sweet",
    "artist": "豊川風花",
    "brand": "ML"
  },
  {
    "title": "Just be myself!!",
    "artist": "如月千早",
    "brand": "ML"
  },
  {
    "title": "HOME, SWEET FRIENDSHIP",
    "artist": "リコッタ",
    "brand": "ML"
  },
  {
    "title": "Super Lover",
    "artist": "横山奈緒",
    "brand": "ML"
  },
  {
    "title": "Up!10sion♪Pleeeeeeeeease!",
    "artist": "松田亜利沙",
    "brand": "ML"
  },
  {
    "title": "フローズン・ワード",
    "artist": "所恵美",
    "brand": "ML"
  },
  {
    "title": "水中キャンディ",
    "artist": "馬場このみ",
    "brand": "ML"
  },
  {
    "title": "Day After “ Yesterday”",
    "artist": "永吉昴",
    "brand": "ML"
  },
  {
    "title": "WHY?",
    "artist": "百瀬莉緒",
    "brand": "ML"
  },
  {
    "title": "STEREOPHONIC ISOTONIC",
    "artist": "ロコ",
    "brand": "ML"
  },
  {
    "title": "Dreaming!",
    "artist": "765 MILLIONSTARS",
    "brand": "ML"
  },
  {
    "title": "アライブファクター",
    "artist": "如月千早×最上静香",
    "brand": "ML"
  },
  {
    "title": "Persona Voice",
    "artist": "二階堂千鶴×萩原雪歩",
    "brand": "ML"
  },
  {
    "title": "Decided",
    "artist": "徳川まつり×馬場このみ",
    "brand": "ML"
  },
  {
    "title": "深層マーメイド",
    "artist": "伊吹翼×我那覇響",
    "brand": "ML"
  },
  {
    "title": "little trip around the world",
    "artist": "エミリー スチュアート×水瀬伊織",
    "brand": "ML"
  },
  {
    "title": "fruity love",
    "artist": "野々原茜×ロコ",
    "brand": "ML"
  },
  {
    "title": "夜に輝く星座のように",
    "artist": "松田亜利沙×横山奈緒",
    "brand": "ML"
  },
  {
    "title": "アイル (Harmonized ver.)",
    "artist": "伊吹翼, ジュリア, 真壁瑞希",
    "brand": "ML"
  },
  {
    "title": "サンリズム・オーケストラ♪",
    "artist": "Sunshine Rhythm",
    "brand": "ML"
  },
  {
    "title": "Raise the FLAG",
    "artist": "サジタリアス",
    "brand": "ML"
  },
  {
    "title": "P.S I Love You",
    "artist": "ピスケス",
    "brand": "ML"
  },
  {
    "title": "プリムラ",
    "artist": "ウィルゴ",
    "brand": "ML"
  },
  {
    "title": "待ちぼうけのLacrima",
    "artist": "アクアリウス",
    "brand": "ML"
  },
  {
    "title": "brave HARMONY",
    "artist": "BlueMoon Harmony",
    "brand": "ML"
  },
  {
    "title": "Sweet Sweet Soul",
    "artist": "アリエス",
    "brand": "ML"
  },
  {
    "title": "メメント？モメント♪ルルルルル☆",
    "artist": "タウラス",
    "brand": "ML"
  },
  {
    "title": "Starry Melody",
    "artist": "Starlight Melody",
    "brand": "ML"
  },
  {
    "title": "俠気乱舞",
    "artist": "ジュリア, 周防桃子, 大神環, 木下ひなた, 福田のり子",
    "brand": "ML"
  },
  {
    "title": "Brand New Theater!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "インヴィンシブル・ジャスティス",
    "artist": "伊吹翼, 高坂海美",
    "brand": "ML"
  },
  {
    "title": "FairyTaleじゃいられない",
    "artist": "フェアリースターズ",
    "brand": "ML"
  },
  {
    "title": "Princess Be Ambitious!!",
    "artist": "プリンセススターズ",
    "brand": "ML"
  },
  {
    "title": "昏き星, 遠い月",
    "artist": "夜想令嬢 -GRAC&E NOCTURNE-",
    "brand": "ML"
  },
  {
    "title": "Everlasting",
    "artist": "夜想令嬢 -GRAC&E NOCTURNE-",
    "brand": "ML"
  },
  {
    "title": "虹色letters",
    "artist": "Cleasky",
    "brand": "ML"
  },
  {
    "title": "想い出はクリアスカイ",
    "artist": "Cleasky",
    "brand": "ML"
  },
  {
    "title": "Melty Fantasia",
    "artist": "EScape",
    "brand": "ML"
  },
  {
    "title": "I.D～EScape from Utopia",
    "artist": "EScape",
    "brand": "ML"
  },
  {
    "title": "花ざかりWeekend✿",
    "artist": "4 Luxury",
    "brand": "ML"
  },
  {
    "title": "RED ZONE",
    "artist": "4 Luxury",
    "brand": "ML"
  },
  {
    "title": "BORN ON DREAM! ～HANABI☆NIGHT～",
    "artist": "閃光☆HANABI団",
    "brand": "ML"
  },
  {
    "title": "UNION!!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "ミラージュ・ミラー",
    "artist": "Charlotte・Charlotte",
    "brand": "ML"
  },
  {
    "title": "ギブミーメタファー",
    "artist": "STAR ELEMENTS",
    "brand": "ML"
  },
  {
    "title": "ローリング△さんかく",
    "artist": "周防桃子",
    "brand": "ML"
  },
  {
    "title": "瑠璃色金魚と花菖蒲",
    "artist": "白石紬",
    "brand": "ML"
  },
  {
    "title": "プリンセス・アラモード",
    "artist": "徳川まつり",
    "brand": "ML"
  },
  {
    "title": "ロケットスター☆",
    "artist": "伊吹翼",
    "brand": "ML"
  },
  {
    "title": "CAT CROSSING",
    "artist": "北沢志保",
    "brand": "ML"
  },
  {
    "title": "ハミングバード",
    "artist": "桜守歌織",
    "brand": "ML"
  },
  {
    "title": "Only One Second",
    "artist": "高山紗代子",
    "brand": "ML"
  },
  {
    "title": "Silent Joker",
    "artist": "真壁瑞希",
    "brand": "ML"
  },
  {
    "title": "スタートリップ",
    "artist": "ジュリア",
    "brand": "ML"
  },
  {
    "title": "スノウレター",
    "artist": "木下ひなた",
    "brand": "ML"
  },
  {
    "title": "教えてlast note…",
    "artist": "篠宮可憐",
    "brand": "ML"
  },
  {
    "title": "空に手が触れる場所",
    "artist": "北上麗花",
    "brand": "ML"
  },
  {
    "title": "ビッグバンズバリボー!!!!!",
    "artist": "高坂海美, 所恵美, 高山紗代子, 豊川風花, 横山奈緒",
    "brand": "ML"
  },
  {
    "title": "ラスト・アクトレス",
    "artist": "田中琴葉, 周防桃子, 馬場このみ, 真壁瑞希, 白石紬",
    "brand": "ML"
  },
  {
    "title": "Flyers!!!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "Justice OR Voice",
    "artist": "ジェネシス×ネメシス",
    "brand": "ML"
  },
  {
    "title": "Clover Days",
    "artist": "Clover",
    "brand": "ML"
  },
  {
    "title": "Fermata in Rapsodia",
    "artist": "ARCANA",
    "brand": "ML"
  },
  {
    "title": "百花は月下に散りぬるを",
    "artist": "花咲夜",
    "brand": "ML"
  },
  {
    "title": "絶対的Performer",
    "artist": "miraclesonic★expassion",
    "brand": "ML"
  },
  {
    "title": "My Evolution",
    "artist": "miraclesonic★expassion",
    "brand": "ML"
  },
  {
    "title": "Glow Map",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "Do the IDOL!! ～断崖絶壁チュパカブラ～",
    "artist": "天空橋朋花, エミリー スチュアート, 七尾百合子, 永吉昴, 伊吹翼",
    "brand": "ML"
  },
  {
    "title": "MUSIC JOURNEY",
    "artist": "桜守歌織",
    "brand": "ML"
  },
  {
    "title": "さかしまの言葉",
    "artist": "白石紬",
    "brand": "ML"
  },
  {
    "title": "ReTale",
    "artist": "≡君彩≡",
    "brand": "ML"
  },
  {
    "title": "パンとフィルム",
    "artist": "≡君彩≡",
    "brand": "ML"
  },
  {
    "title": "ABSOLUTE RUN!!!",
    "artist": "ストロベリーポップムーン",
    "brand": "ML"
  },
  {
    "title": "Be proud",
    "artist": "ストロベリーポップムーン",
    "brand": "ML"
  },
  {
    "title": "花びらメモリーズ",
    "artist": "白石紬, 佐竹美奈子, 周防桃子, 所恵美",
    "brand": "ML"
  },
  {
    "title": "Harmony 4 You",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "EVERYDAY STARS!!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "DIAMOND JOKER",
    "artist": "伊吹翼, 徳川まつり, 四条貴音, 所恵美",
    "brand": "ML"
  },
  {
    "title": "ダイヤモンド・クラリティ",
    "artist": "BRIGHT DIAMOND",
    "brand": "ML"
  },
  {
    "title": "Shamrock Vivace",
    "artist": "CLEVER CLOVER",
    "brand": "ML"
  },
  {
    "title": "空色♡ Birthday Card",
    "artist": "LOVERS HEART",
    "brand": "ML"
  },
  {
    "title": "LOVE is GAME",
    "artist": "天空橋朋花, 高槻やよい, 佐竹美奈子, 七尾百合子",
    "brand": "ML"
  },
  {
    "title": "CHEER UP! HEARTS UP!",
    "artist": "望月杏奈, 矢吹可奈, 天海春香, ジュリア",
    "brand": "ML"
  },
  {
    "title": "夢にかけるRainbow",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "ESPADA",
    "artist": "SHADE OF SPADE",
    "brand": "ML"
  },
  {
    "title": "KING of SPADE",
    "artist": "白石紬, 我那覇響, 豊川風花, 野々原茜",
    "brand": "ML"
  },
  {
    "title": "オレンジ・エピソード",
    "artist": "佐竹美奈子, 北沢志保, 天海春香, 舞浜歩, 松田亜利沙",
    "brand": "ML"
  },
  {
    "title": "週末だけのハーレクイン",
    "artist": "百瀬莉緒",
    "brand": "ML"
  },
  {
    "title": "グローインミュージック！",
    "artist": "矢吹可奈",
    "brand": "ML"
  },
  {
    "title": "折紙物語",
    "artist": "白石紬",
    "brand": "ML"
  },
  {
    "title": "稲妻スピリット",
    "artist": "横山奈緒",
    "brand": "ML"
  },
  {
    "title": "ふたり繋ぐ星座",
    "artist": "北上麗花",
    "brand": "ML"
  },
  {
    "title": "REACH THE SKY",
    "artist": "高山紗代子",
    "brand": "ML"
  },
  {
    "title": "Vacation VS Summer ～ナツとヤスミのアンビバレント！～",
    "artist": "徳川まつり, 大神環, 白石紬, 福田のり子, 三浦あずさ",
    "brand": "ML"
  },
  {
    "title": "春風満帆スターティング",
    "artist": "萩原雪歩, 福田のり子, 菊地真, 最上静香, 永吉昴",
    "brand": "ML"
  },
  {
    "title": "リベレイシング／アロン -LiberaSing Along-",
    "artist": "如月千早, 木下ひなた, 天空橋朋花, 徳川まつり, 馬場このみ",
    "brand": "ML"
  },
  {
    "title": "カンパリーナ♡",
    "artist": "三浦あずさ, 二階堂千鶴, 四条貴音, 北上麗花, 豊川風花",
    "brand": "ML"
  },
  {
    "title": "Dance in the Light",
    "artist": "舞浜歩, 水瀬伊織, 高山紗代子, 永吉昴, 百瀬莉緒",
    "brand": "ML"
  },
  {
    "title": "Crossing!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "グッドサイン",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "電波感傷",
    "artist": "オフィウクス",
    "brand": "ML"
  },
  {
    "title": "Rat A Tat!!!",
    "artist": "MILLIONSTARS",
    "brand": "ML"
  },
  {
    "title": "セブンカウント",
    "artist": "MILLIONSTARS",
    "brand": "ML"
  },
  {
    "title": "Star Impression",
    "artist": "MILLIONSTARS Team1st",
    "brand": "ML"
  },
  {
    "title": "海風とカスタネット",
    "artist": "MILLIONSTARS Team2nd",
    "brand": "ML"
  },
  {
    "title": "オレンジノキオク",
    "artist": "MILLIONSTARS Team3rd",
    "brand": "ML"
  },
  {
    "title": "バトンタッチ",
    "artist": "MILLIONSTARS Team5th",
    "brand": "ML"
  },
  {
    "title": "トワラー",
    "artist": "MILLIONSTARS Team7th",
    "brand": "ML"
  },
  {
    "title": "REFRAIN REL@TION",
    "artist": "MILLIONSTARS Team8th",
    "brand": "ML"
  },
  {
    "title": "SunRiser",
    "artist": "双海亜美, 秋月律子, 星井美希, 高槻やよい, 双海真美",
    "brand": "ML"
  },
  {
    "title": "ilLUmiNAte!",
    "artist": "菊地真, 如月千早, 我那覇響, 三浦あずさ",
    "brand": "ML"
  },
  {
    "title": "Upper Dog",
    "artist": "箱崎星梨花, 天空橋朋花, 野々原茜, 馬場このみ",
    "brand": "ML"
  },
  {
    "title": "Hypernova",
    "artist": "永吉昴, 高山紗代子, 篠宮可憐, 二階堂千鶴, 松田亜利沙",
    "brand": "ML"
  },
  {
    "title": "推しってほんと",
    "artist": "所恵美, 島原エレナ, 佐竹美奈子, 田中琴葉, 矢吹可奈",
    "brand": "ML"
  },
  {
    "title": "未完成のポラリス",
    "artist": "宮尾美也, 望月杏奈, 舞浜歩, 横山奈緒",
    "brand": "ML"
  },
  {
    "title": "Sky Survive",
    "artist": "白石紬, 福田のり子, 伊吹翼, 木下ひなた",
    "brand": "ML"
  },
  {
    "title": "All Alone",
    "artist": "エミリー・スチュアート, 北上麗花, 春日未来, 北沢志保",
    "brand": "ML"
  },
  {
    "title": "I.V.",
    "artist": "真壁瑞希, 七尾百合子, 最上静香, 百瀬莉緒, ロコ",
    "brand": "ML"
  },
  {
    "title": "7Days A Week!!",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "頂上決戦ヴィクトリー!!!!!!",
    "artist": "最上静香, 菊地真, エミリー・スチュアート, 大神環, 北上麗花, 天空橋朋花",
    "brand": "ML"
  },
  {
    "title": "Clash of Colors",
    "artist": "横山奈緒, 真壁瑞希, 萩原雪歩, 永吉昴",
    "brand": "ML"
  },
  {
    "title": "不思議発見ラボ！",
    "artist": "木下ひなた, 矢吹可奈, 白石紬",
    "brand": "ML"
  },
  {
    "title": "Texting you",
    "artist": "高山紗代子, 野々原茜, 所恵美",
    "brand": "ML"
  },
  {
    "title": "蝶々むすび",
    "artist": "765 MILLION ALLSTARS",
    "brand": "ML"
  },
  {
    "title": "飛べない僕は泳いだ",
    "artist": "宮尾美也, 天空橋朋花, 徳川まつり",
    "brand": "ML"
  },
  {
    "title": "SPARKERS",
    "artist": "高山紗代子",
    "brand": "ML"
  },
    {
    "title": "DRIVE A LIVE",
    "artist": "315 ALLSTARS",
    "brand": "SM"
  },
  {
    "title": "BRAND NEW FIELD",
    "artist": "Jupiter",
    "brand": "SM"
  },
  {
    "title": "スマイル・エンゲージ",
    "artist": "Beit",
    "brand": "SM"
  },
  {
    "title": "Study Equal Magic!",
    "artist": "S.E.M",
    "brand": "SM"
  },
  {
    "title": "バーニン・クールで輝いて",
    "artist": "神速一魂",
    "brand": "SM"
  },
  {
    "title": "MOON NIGHTのせいにして",
    "artist": "DRAMATIC STARS",
    "brand": "SM"
  },
  {
    "title": "From Teacher To Future!",
    "artist": "S.E.M",
    "brand": "SM"
  },
  {
    "title": "冬の日のエトランゼ",
    "artist": "DRAMATIC STARS, Beit",
    "brand": "SM"
  },
  {
    "title": "Swing Your Leaves",
    "artist": "FRAME",
    "brand": "SM"
  },
  {
    "title": "Hungry?",
    "artist": "THE 虎牙道",
    "brand": "SM"
  },
  {
    "title": "喜怒哀楽万国共通-Burn it up!-",
    "artist": "神速一魂",
    "brand": "SM"
  },
  {
    "title": "Growing Smiles！",
    "artist": "315 ALLSTARS",
    "brand": "SM"
  },
  {
    "title": "We're the one",
    "artist": "C.FIRST",
    "brand": "SM"
  },
  {
    "title": "Not Alone",
    "artist": "C.FIRST",
    "brand": "SM"
  },
  {
    "title": "Plus 1 Good Day!",
    "artist": "FRAME",
    "brand": "SM"
  },
  {
    "title": "はるかぜバトン",
    "artist": "もふもふえん",
    "brand": "SM"
  },
  {
    "title": "Take a StuMp!",
    "artist": "315 ALLSTARS",
    "brand": "SM"
  },
  {
    "title": "Platinum MASK",
    "artist": "Beit",
    "brand": "SM"
  },
  {
    "title": "宵闇のイリュージョン",
    "artist": "THE 虎牙道",
    "brand": "SM"
  },
  {
    "title": "ULTIMATE FLAME",
    "artist": "FRAME",
    "brand": "SM"
  },
  {
    "title": "The Radical JOKER",
    "artist": "High×Joker",
    "brand": "SM"
  },
  {
    "title": "SUPERNOVA",
    "artist": "THE 虎牙道",
    "brand": "SM"
  },
  {
    "title": "Sunny day, Perfect day",
    "artist": "C.FIRST",
    "brand": "SM"
  },
  {
    "title": "SUPREME STARS !!!",
    "artist": "315 ALLSTARS",
    "brand": "SM"
  },
  {
    "title": "FANTASTIC DISCOTHEQUE",
    "artist": "F-LAGS",
    "brand": "SM"
  },
  {
    "title": "アニマ・フォルトゥナ",
    "artist": "蒼井享介, 秋月涼, 信玄誠司, 清澄九郎, 蒼井悠介, 天道 輝, 若里春名, 水嶋咲, 紅井朱雀",
    "brand": "SM"
  }
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
