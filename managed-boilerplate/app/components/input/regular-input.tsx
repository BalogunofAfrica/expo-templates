import { AnimatePresence, motify } from "moti";
import { forwardRef, useCallback, useState } from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";

import {
  ActivityIndicator,
  Box,
  BoxProps,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
} from "@/components/base";
import { Pressable } from "@/components/button";
import { Icon, IconName } from "@/components/icon";
import { wp } from "@/constants/layout";
import { useTheme } from "@/theme";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const MotiText = motify(Text)();

export type RegularInputRefType = RNTextInput;
export interface RegularInputProps
  extends Omit<TextInputProps, "onBlur" | "onFocus"> {
  containerProps?: BoxProps;
  disabled?: boolean;
  footer?: string;
  footerProps?: TextProps;
  header?: string;
  headerProps?: TextProps;
  inputContainerProps?: BoxProps;
  leftIcon?: IconName;
  renderLoadingIcon?: boolean;
  rightIcon?: IconName;
  onLeftIconPress?(): void;
  onRightIconPress?(): void;
  variant?: "dark" | "light";
  whenBlurred?: () => void;
  whenFocused?: () => void;
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
  },
});

const blurTransition = 0;
const focusTransition = 1;
const config: WithTimingConfig = { easing: Easing.ease };

/**
 * Custom  animated`TextInput` component.
 */
function InputComponent(
  {
    containerProps,
    footer,
    footerProps,
    header,
    headerProps,
    inputContainerProps,
    leftIcon,
    renderLoadingIcon,
    rightIcon,
    secureTextEntry,
    onLeftIconPress,
    onRightIconPress,
    variant = "light",
    whenBlurred,
    whenFocused,
    ...inputProps
  }: RegularInputProps,
  ref: React.Ref<RNTextInput | null>,
) {
  const isLight = variant === "light";
  const [secureText, setSecureText] = useState(secureTextEntry ?? false);
  const transition = useSharedValue(blurTransition);
  const { colors } = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      transition.value,
      [blurTransition, focusTransition],
      [colors.black40, colors.white40],
    );
    return {
      borderColor,
    };
  });

  const onBlur = useCallback(() => {
    if (whenBlurred) {
      whenBlurred();
    }
    transition.value = withTiming(blurTransition, config);
  }, [transition, whenBlurred]);
  const onFocus = useCallback(() => {
    if (whenFocused) {
      whenFocused();
    }
    transition.value = withTiming(focusTransition, config);
  }, [transition, whenFocused]);
  const toggleSecureText = useCallback(
    () => setSecureText((_text) => !_text),
    [],
  );

  return (
    <Box {...containerProps}>
      {header ? (
        <Text
          color="textColor"
          marginBottom="s"
          textAlign="left"
          {...headerProps}
        >
          {header}
        </Text>
      ) : null}
      <AnimatedBox
        borderRadius="l"
        borderWidth={wp(2)}
        flexDirection="row"
        overflow="hidden"
        style={animatedStyle}
        {...inputContainerProps}
      >
        {leftIcon ? (
          <Box flex={0.1} justifyContent="center" marginRight="sm">
            <Pressable onPress={onLeftIconPress}>
              <Icon name={leftIcon} size="m" />
            </Pressable>
          </Box>
        ) : null}
        <TextInput
          autoCapitalize="none"
          flex={1}
          onBlur={onBlur}
          onFocus={onFocus}
          paddingHorizontal="xl"
          paddingVertical="m"
          placeholderTextColor={colors.placeholderColor}
          ref={ref}
          secureTextEntry={secureText}
          selectionColor={colors.black40}
          style={[
            styles.input,
            {
              color: isLight ? colors.textColor : colors.mainBackground,
            },
          ]}
          {...inputProps}
        />
        {renderLoadingIcon ? (
          <Box alignItems="center" justifyContent="center">
            <ActivityIndicator type="dark" />
          </Box>
        ) : null}
        {rightIcon || secureTextEntry ? (
          <Box
            alignItems="center"
            flex={0.1}
            justifyContent="center"
            marginLeft="sm"
            marginRight={secureTextEntry ? "xl" : undefined}
          >
            <Pressable
              onPress={secureTextEntry ? toggleSecureText : onRightIconPress}
            >
              <Icon
                name={rightIcon || (secureText ? "eye-icon" : "eye-off-icon")}
                size="m"
              />
            </Pressable>
          </Box>
        ) : null}
      </AnimatedBox>
      <AnimatePresence>
        {footer ? (
          <MotiText
            animate={{
              opacity: 1,
            }}
            color="error"
            exit={{
              opacity: 0,
            }}
            fontSize={12}
            from={{
              opacity: 0,
            }}
            textAlign="left"
            {...footerProps}
          >
            {footer}
          </MotiText>
        ) : null}
      </AnimatePresence>
    </Box>
  );
}

export const RegularInput = forwardRef(InputComponent);
