<script setup lang="ts">
import xLogo from "@/assets/imgs/logo-black.png";
import { xId } from "@/data/const";
</script>

<template>
  <v-footer color="green-lighten-1">
    <v-container class="footer-container">
      <v-row justify="center" align="center">
        <v-btn icon :href="`https://x.com/${xId}`" target="_blank" rel="noopener noreferrer">
          <v-img :src="xLogo" class="x-button" />
        </v-btn>
        <span> @{{ xId }} </span>
      </v-row>
      <v-row justify="center">
        <a> 当サイトについて </a>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="css" scoped>
.footer-container {
  text-align: center;
}

.x-button {
  width: 30px;
  height: 30px;
}
</style>
