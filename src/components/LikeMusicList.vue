<script setup lang="ts">
import { ref, watch } from "vue";

import { LIKE_MUSIC_LIST } from "@/data/const";
import type { Brand } from "@/types/Brand";
import type { Music } from "@/types/Music";
import { getBrandIconPath } from "@/utils/image-utils";

const { selectedBrand } = defineProps<{
  selectedBrand: Brand | undefined;
}>();

const likeMusicList = ref<Music[]>(LIKE_MUSIC_LIST);

// selectedBrandが変更されたときに、likeMusicListを更新する
watch(
  () => selectedBrand,
  (newValue: Brand | undefined) => {
    likeMusicList.value = LIKE_MUSIC_LIST.filter((item: Music) => newValue === undefined || item.brand === newValue);
    // console.log("LikeMusicList: selectedBrand changed to ", newValue);
  },
);
</script>

<template>
  <v-container>
    <v-row>
      <h2>Like Music List</h2>
    </v-row>
    <v-row>
      <v-list lines="two" class="d-flex flex-wrap">
        <v-list-item v-for="item in likeMusicList" :key="item.title">
          <template v-slot:title>
            <span class="text-style">{{ item.title }}</span>
          </template>
          <template v-slot:subtitle>
            <span class="text-style">{{ item.artist }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar :icon="getBrandIconPath(item.brand)" class="avatar-icon"></v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<style lang="css" scoped>
.text-style {
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
