<script setup lang="ts">
import { ref, watch } from "vue";

import type { Brand } from "@/types/Brand";
import { getBrandIconPath, getHoverBackgroundColor } from "@/utils/image-utils";

const {
  brand,
  selectedBrand,
  onClick: onClickBrandButton,
} = defineProps<{
  brand?: Brand | undefined;
  selectedBrand: Brand | undefined;
  onClick: (event: MouseEvent) => void;
}>();

const hoverBackgroundColor = getHoverBackgroundColor(brand);

/**
 * 本コンポーネントのブランドが選択中かどうかを判定する
 * @param brand 本コンポーネントが担当するブランド
 * @param selectedBrand 現在選択されているブランド
 * @returns 選択中のブランドが本コンポーネントのブランドと一致する場合はtrue、それ以外はfalse
 */
const checkIsOwnBrandSelected = (brand: Brand | undefined, selectedBrand: Brand | undefined): boolean => {
  return brand === selectedBrand;
};

/** 本コンポーネントが選択中かどうかを保持するリアクティブなref */
const isSelectedBrand = ref<boolean>(checkIsOwnBrandSelected(brand, selectedBrand));
watch(
  () => selectedBrand,
  (newBrand) => {
    isSelectedBrand.value = checkIsOwnBrandSelected(brand, newBrand);
  },
);
</script>

<template>
  <v-btn
    icon
    @click="onClickBrandButton"
    class="button-style"
    :class="{ 'button-selected': isSelectedBrand }"
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

.button-style:hover,
.button-style.button-selected {
  background-color: var(--hover-background-color);
}

.button-style:hover :deep(svg *),
.button-style.button-selected :deep(svg *) {
  fill: #ffffff;
}
</style>
