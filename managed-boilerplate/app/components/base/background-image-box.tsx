import { createBox } from "@shopify/restyle";
import { ImageBackground } from "react-native";

import { Theme } from "@/theme";

export const BackgroundImageBox = createBox<
  Theme,
  React.ComponentProps<typeof ImageBackground>
>(ImageBackground);

export type BackgroundImageBoxProps = React.ComponentProps<
  typeof ImageBackground
>;
