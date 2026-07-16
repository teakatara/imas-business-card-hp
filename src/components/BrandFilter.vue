<script setup lang="ts">
import { ref } from "vue";

import type { Brand } from "@/types/Brand";

const selectedBrand = ref<Brand | undefined>(undefined);

const onClickBrandButton = (event: MouseEvent) => {
  const brand = (event.currentTarget as HTMLElement | null)?.dataset.brand;
  selectedBrand.value = brand ? (brand as Brand) : undefined;
  console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
};

defineExpose({
  selectedBrand,
});
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center justify-center fill-height">
      <v-btn @click="onClickBrandButton">ALL</v-btn>
      <v-btn data-brand="AS" @click="onClickBrandButton">AS</v-btn>
      <v-btn data-brand="CG" @click="onClickBrandButton">CG</v-btn>
      <v-btn data-brand="ML" @click="onClickBrandButton">ML</v-btn>
      <v-btn data-brand="SM" @click="onClickBrandButton">SM</v-btn>
      <v-btn data-brand="SC" @click="onClickBrandButton">SC</v-btn>
      <v-btn data-brand="Gk" @click="onClickBrandButton">Gk</v-btn>
    </v-row>
  </v-container>
</template>
