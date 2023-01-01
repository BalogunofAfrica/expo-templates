import { ColorSchemeName, useColorScheme } from "react-native";

export function useDarkMode() {
  const systemScheme = useColorScheme() as NonNullable<ColorSchemeName>;

  return systemScheme === "dark";
}
