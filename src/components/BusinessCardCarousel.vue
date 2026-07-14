<script setup lang="ts">
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";

import BusinessCard from "@/components/BusinessCard.vue";
import { BUSINESS_CARD_LIST } from "@/data/const.ts";
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
    <swiper-slide v-for="(businessCard, i) in BUSINESS_CARD_LIST" :key="i" style="max-width: 100%; width: 700px">
      <BusinessCard
        :businessCardFrontFaceImageSrc="businessCard.businessCardFrontFaceImageSrc"
        :businessCardBackFaceImageSrc="businessCard.businessCardBackFaceImageSrc"
      />
    </swiper-slide>
  </swiper>
</template>
