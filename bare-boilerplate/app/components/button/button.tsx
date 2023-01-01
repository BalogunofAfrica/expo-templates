import { useCallback, useMemo } from "react";

import { ActivityIndicator, Box, Text, TextProps } from "@/components/base";
import { Icon, IconName } from "@/components/icon";
import { useTheme } from "@/theme";

import { PressableSpring, PressableSpringProps } from "./pressable-spring";

export type ButtonProps = PressableSpringProps & {
  icon?: IconName;
  isLoading?: boolean;
  label: string;
  labelProps?: TextProps;
  variant?: "primary" | "secondary";
};

/**
 * Custom `Button` component with two variants (primary & secondary)
 * inherits Pressable Props
 * @see {@link PressableSpringProps}
 */
export function Button({
  icon,
  isLoading = false,
  label,
  labelProps,
  variant = "primary",
  onPress,
  ...rest
}: ButtonProps) {
  const { spacing } = useTheme();
  const handlePress: NonNullable<PressableSpringProps["onPress"]> = useCallback(
    (event) => {
      if (isLoading) return;
      if (onPress) {
        onPress(event);
      }
    },
    [isLoading, onPress],
  );
  const iconStyle = useMemo(() => ({ marginRight: spacing.xs }), [spacing]);

  return (
    <PressableSpring
      alignItems="center"
      backgroundColor={variant === "primary" ? "black40" : "white40"}
      borderRadius="xl"
      justifyContent="center"
      onPress={handlePress}
      paddingVertical="sm"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator type={variant === "primary" ? "light" : "dark"} />
      ) : (
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          key={label}
        >
          {icon && <Icon name={icon} size="m" style={iconStyle} />}
          <Text
            color={variant === "primary" ? "white" : "black"}
            fontWeight="400"
            lineHeight={undefined}
            textAlign="justify"
            variant="h4"
            {...labelProps}
          >
            {label}
          </Text>
        </Box>
      )}
    </PressableSpring>
  );
}
