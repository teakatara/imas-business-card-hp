<script lang="ts" setup>
import { ref } from "vue";

import BrandFilter from "@/components/BrandFilter.vue";
import GameIdList from "@/components/GameIdList.vue";
import LikeMusicList from "@/components/LikeMusicList.vue";
import ProduceIdolList from "@/components/ProduceIdolList.vue";

const brandFilterRef = ref<InstanceType<typeof BrandFilter> | null>(null);
</script>

<template>
  <v-container>
    <v-row class="mt-0">
      <BrandFilter ref="brandFilterRef" />
    </v-row>
    <v-row class="mt-0">
      <ProduceIdolList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
    <v-row class="mt-0">
      <GameIdList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
    <v-row class="mt-0">
      <LikeMusicList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
  </v-container>
</template>
