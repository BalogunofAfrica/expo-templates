import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";

import { Theme } from "@/theme";

import { Box } from "./box";

export const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);

export type CardProps = React.ComponentProps<typeof Card>;
