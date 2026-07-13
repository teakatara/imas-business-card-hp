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
  >
    <swiper-slide v-for="(businessCard, i) in BUSINESS_CARD_LIST" :key="i" style="width: 620px">
      <BusinessCard
        :businessCardFrontFaceImageSrc="businessCard.businessCardFrontFaceImageSrc"
        :businessCardBackFaceImageSrc="businessCard.businessCardBackFaceImageSrc"
      />
    </swiper-slide>
  </swiper>
</template>
