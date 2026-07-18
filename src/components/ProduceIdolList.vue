<script setup lang="ts">
import { ref, watch } from "vue";

import { PRODUCE_IDOL_LIST } from "@/data/const";
import type { Brand } from "@/types/Brand";
import type { ProduceIdol } from "@/types/ProduceIdol";
import { getBrandIconPath } from "@/utils/image-utils";

const { selectedBrand } = defineProps<{
  selectedBrand: Brand | undefined;
}>();

const produceIdolList = ref<ProduceIdol[]>(PRODUCE_IDOL_LIST);

// selectedBrandが変更されたときに、produceIdolListを更新する
watch(
  () => selectedBrand,
  (newValue: Brand | undefined) => {
    produceIdolList.value = PRODUCE_IDOL_LIST.filter(
      (item: ProduceIdol) => newValue === undefined || item.brand === newValue,
    );
    // console.log("ProduceIdolList: selectedBrand changed to ", newValue);
  },
);
</script>

<template>
  <v-container>
    <v-row>
      <h2>Produce Idol List</h2>
    </v-row>
    <v-row>
      <v-list lines="two" class="d-flex flex-wrap">
        <v-list-item v-for="item in produceIdolList" :key="item.name">
          <template v-slot:title>
            <span class="idol-name">{{ item.name }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar
              :image="item.icon"
              :icon="item.icon === undefined ? getBrandIconPath(item.brand) : undefined"
              class="avatar-icon"
            ></v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<style lang="css" scoped>
.idol-name {
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
}

.avatar-icon {
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 rgba(137, 156, 174, 0.5);
  padding: 0.5rem;
  transform: scale(1.25);
}
</style>
