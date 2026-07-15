<script setup lang="ts">
import { ref } from "vue";

import { GAME_ID_LIST } from "@/data/const";
import type { GameId } from "@/types/GameId";

const gameIdList = ref<GameId[]>(GAME_ID_LIST);
</script>

<template>
  <v-container>
    <v-row>
      <h2>Game Id List</h2>
    </v-row>
    <v-row>
      <v-list lines="two">
        <v-list-item v-for="item in gameIdList" :key="item.gameId">
          <template v-slot:title>
            <span style="word-break: keep-all; overflow-wrap: break-word; white-space: normal">{{ item.title }}</span>
          </template>
          <template v-slot:subtitle>
            <span style="word-break: keep-all; overflow-wrap: break-word; white-space: normal">{{ item.gameId }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar :image="item.icon" rounded="5"></v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>
