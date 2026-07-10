<script setup lang="ts">
import BusinessCard from "./components/BusinessCard.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <BusinessCard
    businessCardFrontFaceImageSrc="/src/assets/名刺サイズの画像.png"
    businessCardBackFaceImageSrc="/src/assets/名刺サイズの画像2.png"
  />
  <HelloWorld />
</template>
