import { Pressable } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  LongPressGestureHandlerEventPayload,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

import { Box, BoxProps } from "@/components/base";

const AnimatedBox = Animated.createAnimatedComponent(Box);

type TPressGesture = (
  event?: GestureStateChangeEvent<TapGestureHandlerEventPayload>,
) => void;
type TLongPressGesture = (
  event?: GestureStateChangeEvent<LongPressGestureHandlerEventPayload>,
) => void;
export type PressableSpringProps = BoxProps & {
  children?: React.ReactNode;
  disabled?: boolean;
  longPressDelayMs?: number;
  onLongPress?: TLongPressGesture;
  onPress?: TPressGesture;
  scaleBaseValue?: number;
  scaleConfig?: WithSpringConfig;
  scaleValue?: number;
};

/**
 * Custom themed `Pressable` component with three feedback types: `"no-feedback" | "opacity" | "scale";`.
 */
export function PressableSpring({
  children,
  disabled,
  longPressDelayMs = 700,
  onLongPress,
  onPress,
  scaleBaseValue = 1,
  scaleConfig = {
    damping: 7,
    mass: 0.2,
    stiffness: 250,
  },
  scaleValue = 0.95,
  ...rest
}: PressableSpringProps) {
  const scale = useSharedValue(1);
  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const pressGesture = Gesture.Tap()
    .enabled(!disabled)
    .numberOfTaps(1)
    .onBegin(() => {
      "worklet";

      scale.value = withSpring(scaleValue, scaleConfig);
    })
    .onEnd(() => {
      "worklet";

      scale.value = withSpring(scaleBaseValue, scaleConfig);
    })
    .onFinalize((event, success) => {
      if (success && onPress) {
        runOnJS(onPress)(event);
      }
    });

  const longPressGesture = Gesture.LongPress()
    .enabled(!disabled)
    .minDuration(longPressDelayMs)
    .onEnd(() => {
      "worklet";

      scale.value = withSpring(scaleBaseValue, scaleConfig);
      // runOnJS(hapticFeedback)();
    })
    .onFinalize((event, success) => {
      if (success && onLongPress) {
        runOnJS(onLongPress)(event);
      }
    });

  return (
    <Pressable>
      <GestureDetector
        gesture={Gesture.Exclusive(pressGesture, longPressGesture)}
        userSelect="none"
      >
        <AnimatedBox opacity={disabled ? 0.4 : 1} {...rest} style={scaleStyle}>
          {children}
        </AnimatedBox>
      </GestureDetector>
    </Pressable>
  );
}
