import { useTheme as useRestyleTheme } from "@shopify/restyle";

import { Theme } from "./get-theme";

export const useTheme = () => useRestyleTheme<Theme>();
