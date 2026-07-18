<script setup lang="ts">
import { ref } from "vue";

import xLogo from "@/assets/imgs/logo-black.png";
import AboutSiteModal from "@/components/AboutSiteModal.vue";
import { X_ID } from "@/data/const";

const modalRef = ref<InstanceType<typeof AboutSiteModal> | null>(null);
const openAboutModal = (): void => {
  modalRef.value?.openAboutModal();
};
</script>

<template>
  <v-footer color="green-lighten-1">
    <v-container class="footer-container">
      <v-row justify="center" align="center">
        <v-btn icon :href="`https://x.com/${X_ID}`" target="_blank" rel="noopener noreferrer">
          <v-img :src="xLogo" class="x-button" />
        </v-btn>
        <span> @{{ X_ID }} </span>
      </v-row>
      <v-row justify="center">
        <a href="#" class="about-link" @click.prevent="openAboutModal"> 当サイトについて </a>
      </v-row>
    </v-container>
    <AboutSiteModal ref="modalRef" />
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

.about-link {
  cursor: pointer;
  text-decoration: underline;
  color: white;
}
</style>
