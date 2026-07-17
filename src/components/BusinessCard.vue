<script setup lang="ts">
import { VBtn, VCard } from "vuetify/components";

// defineProps の受け取り方を元の形に合わせ、すべてテンプレートで使えるように修正
const { isFrontFaceVisible, businessCardFrontFaceImageSrc, businessCardBackFaceImageSrc, onClickToggleFace } =
  defineProps<{
    businessCardFrontFaceImageSrc: string;
    businessCardBackFaceImageSrc: string;
    isFrontFaceVisible: boolean;
    onClickToggleFace: () => void;
  }>();
</script>

<template>
  <v-card class="business-card">
    <Transition name="flip" mode="out-in">
      <img
        v-if="isFrontFaceVisible"
        key="front"
        :src="businessCardFrontFaceImageSrc"
        alt="Business Card Front Face Image"
        class="card-image"
      />
      <img
        v-else
        key="back"
        :src="businessCardBackFaceImageSrc"
        alt="Business Card Back Face Image"
        class="card-image"
      />
    </Transition>

    <!-- 初回クリックの遅延を防ぐための先読み -->
    <link rel="preload" as="image" :href="businessCardFrontFaceImageSrc" />
    <link rel="preload" as="image" :href="businessCardBackFaceImageSrc" />

    <v-btn @click="onClickToggleFace" class="reverse-button">裏返す</v-btn>
  </v-card>
</template>

<style scoped>
.business-card {
  width: 100%;
  height: 100%;
  position: relative;
}

/* アニメーションの速度とイージングを設定 */
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.15s ease-in-out;
}

/* 消えるときは右へ90度平らに回転、現れるときは左90度平らな状態からスタート */
.flip-enter-from {
  transform: rotateY(-90deg);
}
.flip-leave-to {
  transform: rotateY(90deg);
}

.card-image {
  width: 100%;
  height: 100%;
  /* 縦横比を保ったまま領域に合わせます */
  object-fit: cover;
  transform-origin: center;
  display: block;
}

.reverse-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 10;
}
</style>
