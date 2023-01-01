import { ThemeProvider as Provider } from "@shopify/restyle";

import { useDarkMode } from "@/hooks/system";

import { getTheme } from "./get-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useDarkMode();
  const theme = getTheme(isDark);

  return <Provider theme={theme}>{children}</Provider>;
}
