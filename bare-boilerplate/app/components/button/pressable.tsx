import { useCallback } from "react";
import {
  GestureResponderEvent,
  Pressable as NSPressable,
  PressableStateCallbackType,
} from "react-native";

import { Box, BoxProps } from "@/components/base";

export type PressableProps = BoxProps & {
  children?: React.ReactNode;
  disabled?: boolean;
  longPressDelayMs?: number;
  onLongPress?(event?: GestureResponderEvent): void;
  onPress?(event?: GestureResponderEvent): void;
  opacityLevel?: number;
  type?: "no-feedback" | "opacity";
};

/**
 * Custom themed `Pressable` component with two feedback types: `"no-feedback" | "opacity"`.
 * Note `type="scale"` deprecated, see `PressableSpring` to use such functionality
 */
export function Pressable({
  children,
  disabled,
  longPressDelayMs = 700,
  onLongPress,
  onPress,
  opacityLevel = 0.5,
  type = "no-feedback",
  ...rest
}: PressableProps) {
  const pressStyle = useCallback(
    // eslint-disable-next-line consistent-return
    ({ pressed }: PressableStateCallbackType) => {
      if (type === "opacity")
        return {
          opacity: pressed ? opacityLevel : 1,
        };
    },
    [opacityLevel, type],
  );

  return (
    <NSPressable
      delayLongPress={longPressDelayMs}
      disabled={disabled}
      onLongPress={onLongPress}
      onPress={onPress}
      style={pressStyle}
    >
      <Box opacity={disabled ? 0.4 : 1} {...rest}>
        {children}
      </Box>
    </NSPressable>
  );
}
