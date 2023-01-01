import {
  StatusBar as ExpoBar,
  StatusBarProps as ExpoBarProps,
} from "expo-status-bar";

import { useTheme } from "@/theme";

export type StatusBarProps = ExpoBarProps;

export function StatusBar(props: StatusBarProps) {
  const { scheme } = useTheme();

  return <ExpoBar style={scheme === "dark" ? "light" : "dark"} {...props} />;
}
