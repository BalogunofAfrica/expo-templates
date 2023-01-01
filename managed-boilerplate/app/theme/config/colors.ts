import { palette } from "./palette";

export const lightColors = {
  ...palette,
  mainBackground: palette.white,
  placeholderColor: palette.black40,
  textColor: palette.black,
};

export const darkColors = {
  ...lightColors,
  mainBackground: palette.black,
  placeholderColor: palette.white40,
  textColor: palette.white,
};

export type TColors = keyof typeof lightColors;
