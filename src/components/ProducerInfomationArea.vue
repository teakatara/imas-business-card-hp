<script lang="ts" setup>
import { ref } from "vue";

import BrandFilter from "@/components/BrandFilter.vue";
import GameIdList from "@/components/GameIdList.vue";
import LikeMusicList from "@/components/LikeMusicList.vue";
import ManageIdolList from "@/components/ManageIdolList.vue";

const brandFilterRef = ref<InstanceType<typeof BrandFilter> | null>(null);
</script>

<template>
  <v-container>
    <v-row>
      <BrandFilter ref="brandFilterRef" />
    </v-row>
    <v-row>
      <ManageIdolList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
    <v-row>
      <GameIdList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
    <v-row>
      <LikeMusicList :selected-brand="brandFilterRef?.selectedBrand" />
    </v-row>
  </v-container>
</template>
