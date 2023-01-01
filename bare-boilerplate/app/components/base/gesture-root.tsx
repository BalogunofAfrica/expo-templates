import { ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { PropsFrom } from "@/utils/types";

const gestureFlex: ViewStyle = {
  flex: 1,
};

export type GestureRootProps = PropsFrom<typeof GestureHandlerRootView>;

export function GestureRoot(props: GestureRootProps) {
  return <GestureHandlerRootView style={gestureFlex} {...props} />;
}
