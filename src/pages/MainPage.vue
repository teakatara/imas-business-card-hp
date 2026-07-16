<script setup lang="ts">
import BusinessCardCarousel from "@/components/BusinessCardCarousel.vue";
import Title from "@/components/Title.vue";
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- P名表示 -->
          <Title />
        </v-row>
        <v-row>
          <!-- カルーセルで名刺表示 -->
          <BusinessCardCarousel />
        </v-row>
        <v-row>
          <!-- 各ブランド情報表示 -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
