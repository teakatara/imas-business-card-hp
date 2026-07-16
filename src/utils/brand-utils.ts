import type { Brand } from "@/types/Brand";

export const isBrand = (brand: string | undefined): brand is Brand => {
  return brand === "AS" || brand === "CG" || brand === "ML" || brand === "SM" || brand === "SC" || brand === "Gk";
};
