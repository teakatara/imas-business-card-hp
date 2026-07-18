<script setup lang="ts">
import { ref } from "vue";

import BrandFilterButton from "@/components/BrandFilterButton.vue";
import type { Brand } from "@/types/Brand";
import { isBrand } from "@/utils/brand-utils";

const selectedBrand = ref<Brand | undefined>(undefined);

/**
 * 各ブランドボタンがクリックされた時に、選択されているブランドを保持する処理
 * @param event マウスクリックイベント
 */
const onClickBrandButton = (event: MouseEvent) => {
  const currentTarget = event.currentTarget as HTMLElement | null;

  if (!currentTarget?.hasAttribute("data-brand")) {
    selectedBrand.value = undefined;
    // console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
    return;
  }

  const brand = currentTarget.dataset.brand;
  selectedBrand.value = isBrand(brand) ? brand : undefined;
  // console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
};

defineExpose({
  selectedBrand,
});
</script>

<template>
  <v-container>
    <v-row>
      <h2>Brand Filter</h2>
    </v-row>
    <v-row class="d-flex align-center justify-center mt-0">
      <BrandFilterButton :selected-brand="selectedBrand" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'AS'" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'CG'" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'ML'" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'SM'" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'SC'" @click="onClickBrandButton" />
      <BrandFilterButton :selected-brand="selectedBrand" :brand="'Gk'" @click="onClickBrandButton" />
    </v-row>
  </v-container>
</template>
