import { ObjectValues } from "@/utils/types";

export const Fonts = {
  OutfitBold700: "Outfit-Bold",
  OutfitRegular400: "Outfit-Regular",
} as const;

export type TFontValues = ObjectValues<typeof Fonts>;
