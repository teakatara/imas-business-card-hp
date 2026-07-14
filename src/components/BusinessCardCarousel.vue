<script setup lang="ts">
import { ref } from "vue";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";

import BusinessCard from "@/components/BusinessCard.vue";
import { BUSINESS_CARD_LIST } from "@/data/const.ts";

const makeBusinessCardConfig = (businessCardList: Array<any>) => {
  const resultConfigObj = {
    originalBusinessCardList: businessCardList,
    businessCardList: [...businessCardList],
  };

  if (businessCardList.length !== 0) {
    while (resultConfigObj.businessCardList.length < 5) {
      // 5枚未満の場合は、ループを正常動作させるために名刺を複製する
      resultConfigObj.businessCardList.push(...businessCardList);
    }
  } else {
    // TODO:名刺が1枚もない場合は、ダミーの名刺を表示するか否か検討する
  }

  return resultConfigObj;
};

const businessCardConfig = makeBusinessCardConfig(BUSINESS_CARD_LIST);
const businessCardList = ref(businessCardConfig.businessCardList);
</script>

<template>
  <swiper
    :loop="true"
    :slides-per-view="'auto'"
    :space-between="16"
    :centered-slides="true"
    :centered-slides-bounds="true"
    :slides-per-group="1"
  >
    <swiper-slide
      v-for="(businessCard, i) in businessCardList"
      :key="i"
      style="max-width: 100%; min-width: 35%; width: 700px"
    >
      <BusinessCard
        :businessCardFrontFaceImageSrc="businessCard.businessCardFrontFaceImageSrc"
        :businessCardBackFaceImageSrc="businessCard.businessCardBackFaceImageSrc"
      />
    </swiper-slide>
  </swiper>
</template>
