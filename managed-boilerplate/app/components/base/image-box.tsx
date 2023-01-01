import { createBox } from "@shopify/restyle";
import FastImage from "react-native-fast-image";

import { Theme } from "@/theme";

export const ImageBox = createBox<
  Theme,
  React.ComponentProps<typeof FastImage>
>(FastImage);

export type ImageBoxProps = React.ComponentProps<typeof FastImage>;
