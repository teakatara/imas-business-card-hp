<script setup lang="ts">
import { ref } from "vue";

import type { Brand } from "@/types/Brand";

const selectedBrand = ref<Brand | undefined>(undefined);

const onClickBrandButton = (brand: Brand | undefined) => {
  selectedBrand.value = brand;
  console.log("BrandFilter: selectedBrand.value = ", selectedBrand.value);
};

const brandClickHandlers = {
  ALL: (_event: MouseEvent) => onClickBrandButton(undefined),
  AS: (_event: MouseEvent) => onClickBrandButton("AS"),
  CG: (_event: MouseEvent) => onClickBrandButton("CG"),
  ML: (_event: MouseEvent) => onClickBrandButton("ML"),
  SM: (_event: MouseEvent) => onClickBrandButton("SM"),
  SC: (_event: MouseEvent) => onClickBrandButton("SC"),
  Gk: (_event: MouseEvent) => onClickBrandButton("Gk"),
};

defineExpose({
  selectedBrand,
});
</script>

<template>
  <v-container>
    <v-row class="d-flex align-center justify-center fill-height">
      <v-btn @click="brandClickHandlers.ALL">ALL</v-btn>
      <v-btn @click="brandClickHandlers.AS">AS</v-btn>
      <v-btn @click="brandClickHandlers.CG">CG</v-btn>
      <v-btn @click="brandClickHandlers.ML">ML</v-btn>
      <v-btn @click="brandClickHandlers.SM">SM</v-btn>
      <v-btn @click="brandClickHandlers.SC">SC</v-btn>
      <v-btn @click="brandClickHandlers.Gk">Gk</v-btn>
    </v-row>
  </v-container>
</template>
