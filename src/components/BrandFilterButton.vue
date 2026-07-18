<script setup lang="ts">
import type { Brand } from "@/types/Brand";
import { getBrandIconPath, getHoverBackgroundColor } from "@/utils/image-utils";

const { brand, onClick: onClickBrandButton } = defineProps<{
  brand?: Brand | undefined;
  onClick: (event: MouseEvent) => void;
}>();

const hoverBackgroundColor = getHoverBackgroundColor(brand);
</script>

<template>
  <v-btn
    icon
    @click="onClickBrandButton"
    class="button-style"
    size="x-large"
    :data-brand="brand"
    :style="{ '--hover-background-color': hoverBackgroundColor }"
  >
    <v-icon class="brand-icon" :icon="getBrandIconPath(brand)" alt="Brand Icon" />
  </v-btn>
</template>

<style lang="css" scoped>
.button-style {
  box-shadow: 0 5px 10px 0 rgba(137, 156, 174, 0.5);
  border-radius: 50%;
  padding: 0.5rem;
}
.brand-icon {
  transform: scale(1.5);
}

.button-style:hover {
  background-color: var(--hover-background-color);
}

.button-style:hover :deep(svg *) {
  fill: #ffffff;
}
</style>
