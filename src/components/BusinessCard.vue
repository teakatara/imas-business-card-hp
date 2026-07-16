<script setup lang="ts">
import { VBtn, VCard, VImg } from "vuetify/components";

import { getImagePath } from "@/utils/image-utils";

const { businessCardFrontFaceImageSrc } = defineProps<{
  businessCardFrontFaceImageSrc: string;
  businessCardBackFaceImageSrc: string;
  isFrontFaceVisible: boolean;
  onClickToggleFace: () => void;
}>();
</script>

<template>
  <v-card class="business-card" width="100%" height="100%" position="relative">
    <v-img
      v-if="isFrontFaceVisible"
      :src="getImagePath(businessCardFrontFaceImageSrc)"
      alt="Business Card Front Face Image"
    />
    <v-img v-else :src="getImagePath(businessCardBackFaceImageSrc)" alt="Business Card Back Face Image" />
    <v-btn @click="onClickToggleFace" position="absolute" style="bottom: 5px; right: 5px">裏返す</v-btn>
  </v-card>
</template>
