import { createTheme } from "@shopify/restyle";
import { ColorSchemeName } from "react-native";

import { breakpoints } from "./config/breakpoints";
import { cardVariants } from "./config/card-variants";
import { darkColors, lightColors } from "./config/colors";
import { iconSizes } from "./config/icon-sizes";
import { borderRadii, spacing } from "./config/spacing";
import { textVariants } from "./config/text-variants";

type ColorScheme = NonNullable<ColorSchemeName>;

const lightTheme = createTheme({
  borderRadii,
  breakpoints,
  cardVariants,
  colors: lightColors,
  iconSizes,
  scheme: "light" as ColorScheme,
  spacing,
  textVariants,
});
export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  ...lightTheme,
  colors: darkColors,
  scheme: "dark",
};

export const getTheme = (dark?: boolean) => (dark ? darkTheme : lightTheme);
