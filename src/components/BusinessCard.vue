<script setup lang="ts">
import { ref } from "vue";

import { VBtn, VCard, VImg } from "vuetify/components";

const { businessCardFrontFaceImageSrc } = defineProps<{
  businessCardFrontFaceImageSrc: string;
  businessCardBackFaceImageSrc: string;
}>();

const isFrontFaceVisible = ref<boolean>(true);

const onClickToggleFace = () => {
  isFrontFaceVisible.value = !isFrontFaceVisible.value;
};
</script>

<template>
  <v-card class="business-card" width="100%" height="100%" position="relative">
    <v-img v-if="isFrontFaceVisible" :src="businessCardFrontFaceImageSrc" alt="Business Card Front Face Image" />
    <v-img v-else :src="businessCardBackFaceImageSrc" alt="Business Card Back Face Image" />
    <v-btn @click="onClickToggleFace" position="absolute" style="bottom: 5px; right: 5px">裏返す</v-btn>
  </v-card>
</template>
