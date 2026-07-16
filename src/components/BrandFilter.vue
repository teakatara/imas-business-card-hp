<script setup lang="ts">
import { ref } from "vue";

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
