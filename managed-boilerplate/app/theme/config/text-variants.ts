import { TextStyle } from "react-native";

import { fp } from "@/constants";

import { TColors } from "./colors";
import { Fonts, TFontValues } from "./fonts";

type TStyle = TextStyle & {
  color?: TColors;
  fontFamily?: TFontValues;
};
type TextVariants = Record<string, TStyle>;

export const textVariants = {
  defaults: {
    color: "textColor",
  },
  h1: {
    color: "textColor",
    fontFamily: Fonts.OutfitBold700,
    fontSize: fp(24),
    lineHeight: fp(30),
    textAlign: "center",
  },
  h2: {
    color: "textColor",
    fontFamily: Fonts.OutfitBold700,
    fontSize: fp(18),
    lineHeight: fp(24),
    textAlign: "center",
  },
  h3: {
    color: "textColor",
    fontFamily: Fonts.OutfitRegular400,
    fontSize: fp(16),
    lineHeight: fp(20),
    textAlign: "center",
  },
  h4: {
    color: "textColor",
    fontFamily: Fonts.OutfitRegular400,
    fontSize: fp(14),
    lineHeight: fp(16),
    textAlign: "center",
  },
  h5: {
    color: "textColor",
    fontFamily: Fonts.OutfitRegular400,
    fontSize: fp(12),
    lineHeight: fp(14),
    textAlign: "center",
  },
  h6: {
    color: "textColor",
    fontFamily: Fonts.OutfitRegular400,
    fontSize: fp(10),
    lineHeight: fp(12),
    textAlign: "center",
  },
  p: {
    color: "textColor",
    fontFamily: Fonts.OutfitBold700,
    fontSize: fp(10),
    lineHeight: fp(12),
    textAlign: "center",
  },
} satisfies TextVariants;
