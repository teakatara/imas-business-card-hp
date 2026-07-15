<script setup lang="ts">
import { ref } from "vue";

import type { Brand } from "@/types/Brand";

const selectedBrand = ref<Brand>(undefined);

const onClickBrandButton = (brand: Brand) => {
  selectedBrand.value = brand;
  console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
};

defineExpose({
  selectedBrand,
});
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center justify-center fill-height">
      <v-btn @click="() => onClickBrandButton(undefined)">ALL</v-btn>
      <v-btn @click="() => onClickBrandButton('AS')">AS</v-btn>
      <v-btn @click="() => onClickBrandButton('CG')">CG</v-btn>
      <v-btn @click="() => onClickBrandButton('ML')">ML</v-btn>
      <v-btn @click="() => onClickBrandButton('SM')">SM</v-btn>
      <v-btn @click="() => onClickBrandButton('SC')">SC</v-btn>
      <v-btn @click="() => onClickBrandButton('Gk')">Gk</v-btn>
    </v-row>
  </v-container>
</template>
