<script setup lang="ts">
import { ref } from "vue";

import type { Brand } from "@/types/Brand";

const selectedBrand = ref<Brand | undefined>(undefined);

const onClickBrandButton = (brand: Brand | undefined) => {
  selectedBrand.value = brand;
  console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
};

const onClickAllBrandButton = (_event: MouseEvent) => onClickBrandButton(undefined);
const onClickAsBrandButton = (_event: MouseEvent) => onClickBrandButton("AS");
const onClickCgBrandButton = (_event: MouseEvent) => onClickBrandButton("CG");
const onClickMlBrandButton = (_event: MouseEvent) => onClickBrandButton("ML");
const onClickSmBrandButton = (_event: MouseEvent) => onClickBrandButton("SM");
const onClickScBrandButton = (_event: MouseEvent) => onClickBrandButton("SC");
const onClickGkBrandButton = (_event: MouseEvent) => onClickBrandButton("Gk");

defineExpose({
  selectedBrand,
});
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center justify-center fill-height">
      <v-btn @click="onClickAllBrandButton">ALL</v-btn>
      <v-btn @click="onClickAsBrandButton">AS</v-btn>
      <v-btn @click="onClickCgBrandButton">CG</v-btn>
      <v-btn @click="onClickMlBrandButton">ML</v-btn>
      <v-btn @click="onClickSmBrandButton">SM</v-btn>
      <v-btn @click="onClickScBrandButton">SC</v-btn>
      <v-btn @click="onClickGkBrandButton">Gk</v-btn>
    </v-row>
  </v-container>
</template>
