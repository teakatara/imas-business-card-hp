<script setup lang="ts">
import { type Ref, ref } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import BusinessCard from "@/components/BusinessCard.vue";
import { BUSINESS_CARD_LIST } from "@/data/const";
import type { BusinessCardCarouselOptions, BusinessCardInfo, BusinessCardInfoWithState } from "@/types/BusinessCard";

/**
 * 名刺情報に表示状態を追加したオブジェクトを生成する
 * @param businessCardInfo 名刺情報
 * @param index 名刺情報インデックス(実質ID)
 * @param tmpIsFrontFaceVisible 名刺の表面が表示されているかどうかのRef
 * @param tmpOnClickToggleFace 名刺の表面・裏面を切り替えるための関数
 * @return 名刺情報に表示状態を追加したオブジェクト
 */
function makeBusinessCardInfoWithState(
  businessCardInfo: BusinessCardInfo,
  index: number,
  tmpIsFrontFaceVisible?: Ref<boolean>,
  tmpOnClickToggleFace?: () => void,
): BusinessCardInfoWithState {
  // isFrontFaceVisibleが渡されていない場合は、新規扱いとしてrefを発行する
  const isFrontFaceVisible = tmpIsFrontFaceVisible ?? ref<boolean>(true);

  // onClickToggleFaceが渡されていない場合は、isFrontFaceVisibleを反転させる関数を発行する
  const onClickToggleFace =
    tmpIsFrontFaceVisible !== undefined && tmpOnClickToggleFace !== undefined
      ? tmpOnClickToggleFace
      : () => {
          isFrontFaceVisible.value = !isFrontFaceVisible.value;
        };

  return {
    ...businessCardInfo,
    index,
    isFrontFaceVisible,
    onClickToggleFace,
  };
}

/**
 * 名刺情報配列から名刺カルーセル設定情報を生成する
 * @param businessCardList 名刺情報配列
 * @returns 名刺カルーセル設定情報
 */
function makeBusinessCardConfig(businessCardList: Array<BusinessCardInfo>): BusinessCardCarouselOptions {
  const resultConfigObj: BusinessCardCarouselOptions = {
    originalBusinessCardList: businessCardList,
    businessCardList: businessCardList.map((val, index) => makeBusinessCardInfoWithState(val, index)),
  };

  if (businessCardList.length !== 0) {
    while (resultConfigObj.businessCardList.length < 5) {
      // 5枚未満の場合は、ループを正常動作させるために名刺を複製する
      resultConfigObj.businessCardList.push(
        ...businessCardList.map((val, index) => {
          // 複製対象の名刺の表示状態を引き継ぐために、元の名刺情報のindexを使って、元の名刺情報の表示状態を取得する
          const targetBusinessCardInfoWithState = resultConfigObj.businessCardList.find((item) => item.index === index);
          return makeBusinessCardInfoWithState(
            val,
            index,
            targetBusinessCardInfoWithState?.isFrontFaceVisible,
            targetBusinessCardInfoWithState?.onClickToggleFace,
          );
        }),
      );
    }
  } else {
    // TODO:名刺が1枚もない場合は、ダミーの名刺を表示するか否か検討する
  }

  return resultConfigObj;
}

const businessCardOptions: BusinessCardCarouselOptions = makeBusinessCardConfig(BUSINESS_CARD_LIST);
const businessCardList = ref<BusinessCardInfoWithState[]>(businessCardOptions.businessCardList);
</script>

<template>
  <swiper
    :loop="true"
    :slides-per-view="'auto'"
    :space-between="16"
    :centered-slides="true"
    :centered-slides-bounds="true"
    :slides-per-group="1"
    :autoplay="{
      delay: 5000, // 5秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    }"
    :navigation="true"
    :modules="[Autoplay, Navigation]"
  >
    <swiper-slide
      v-for="(businessCard, i) in businessCardList"
      :key="i"
      style="max-width: 100%; min-width: 35%; width: 620px"
    >
      <BusinessCard
        :businessCardFrontFaceImageSrc="businessCard.businessCardFrontFaceImageSrc"
        :businessCardBackFaceImageSrc="businessCard.businessCardBackFaceImageSrc"
        :isFrontFaceVisible="businessCard.isFrontFaceVisible"
        :onClickToggleFace="businessCard.onClickToggleFace"
      />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #000;
  opacity: 0.5;
}
</style>
