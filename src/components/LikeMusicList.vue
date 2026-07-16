<script setup lang="ts">
import { ref, watch } from "vue";

import { LIKE_MUSIC_LIST } from "@/data/const";
import type { Brand } from "@/types/Brand";
import type { Music } from "@/types/Music";

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

/**
 * ブランド識別子からブランドロゴのパスを取得する
 * @param brand ブランド識別子
 * @returns ブランドロゴのパス
 */
const getBrandIconPath = (brand: Brand): string => {
  switch (brand) {
    case "AS":
      return "/src/assets/imgs/brand-icons/AS.png";
    case "CG":
      return "/src/assets/imgs/brand-icons/CG.png";
    case "ML":
      return "/src/assets/imgs/brand-icons/ML.png";
    case "SM":
      return "/src/assets/imgs/brand-icons/SM.png";
    case "SC":
      return "/src/assets/imgs/brand-icons/SC.png";
    case "Gk":
      return "/src/assets/imgs/brand-icons/Gk.png";
    default:
      return "";
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <h2>Like Music List</h2>
    </v-row>
    <v-row>
      <v-list lines="two">
        <v-list-item v-for="item in likeMusicList" :key="item.title">
          <template v-slot:title>
            <span style="word-break: keep-all; overflow-wrap: break-word; white-space: normal">{{ item.title }}</span>
          </template>
          <template v-slot:subtitle>
            <span style="word-break: keep-all; overflow-wrap: break-word; white-space: normal">{{ item.artist }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar :image="getBrandIconPath(item.brand)" rounded="5"></v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>
