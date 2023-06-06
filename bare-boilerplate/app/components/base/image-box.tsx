import { createBox } from "@shopify/restyle";
import { Image } from "expo-image";

import { Theme } from "@/theme";

export const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(
  Image,
);

export type ImageBoxProps = React.ComponentProps<typeof Image>;
