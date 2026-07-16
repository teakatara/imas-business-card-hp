<script setup lang="ts">
import { ref, watch } from "vue";

import { MANAGE_IDOL_LIST } from "@/data/const";
import type { Brand } from "@/types/Brand";
import type { ManageIdol } from "@/types/ManageIdol";
import { getBrandIconPath } from "@/utils/image-utils";

const { selectedBrand } = defineProps<{
  selectedBrand: Brand | undefined;
}>();

const likeMusicList = ref<ManageIdol[]>(MANAGE_IDOL_LIST);

// selectedBrandが変更されたときに、likeMusicListを更新する
watch(
  () => selectedBrand,
  (newValue: Brand | undefined) => {
    likeMusicList.value = MANAGE_IDOL_LIST.filter(
      (item: ManageIdol) => newValue === undefined || item.brand === newValue,
    );
    // console.log("ManageIdolList: selectedBrand changed to ", newValue);
  },
);
</script>

<template>
  <v-container>
    <v-row>
      <h2>Manage Idol List</h2>
    </v-row>
    <v-row>
      <v-list lines="two" class="d-flex flex-wrap">
        <v-list-item v-for="item in likeMusicList" :key="item.name">
          <template v-slot:title>
            <span style="word-break: keep-all; overflow-wrap: break-word; white-space: normal">{{ item.name }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar :image="item.icon ?? getBrandIconPath(item.brand)" rounded="5"></v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>
