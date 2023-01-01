import { createBox } from "@shopify/restyle";
import { ScrollView } from "react-native";

import { Theme } from "@/theme";

export const ScrollBox = createBox<
  Theme,
  React.ComponentProps<typeof ScrollView>
>(ScrollView);
ScrollBox.defaultProps = {
  bounces: false,
};

export type ScrollBoxProps = React.ComponentProps<typeof ScrollBox>;
export type ScrollBoxRef = ScrollView;
