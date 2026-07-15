<script setup lang="ts">
import BusinessCardCarousel from "@/components/BusinessCardCarousel.vue";
import ProducerInfomationArea from "@/components/ProducerInfomationArea.vue";
import { P_NAME } from "@/data/const.ts";
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- P名表示 -->
          <div>
            {{ P_NAME }}
          </div>
        </v-row>
        <v-row>
          <!-- カルーセルで名刺表示 -->
          <BusinessCardCarousel />
        </v-row>
        <v-row>
          <!-- 各ブランド情報表示 -->
          <ProducerInfomationArea />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
