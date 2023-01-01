import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
} from "@shopify/restyle";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import { Theme, useTheme } from "@/theme";

import { IconName, IconPack } from "./icon-pack";

type IconFunction = React.FC<SvgProps>;
type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme>;
export type IconProps = RestyleProps & {
  svgProps?: SvgProps;
  name: IconName;
  size?: keyof Theme["iconSizes"];
  style?: StyleProp<ViewStyle>;
};

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
]);

/**
 * Custom Icon component based on design systems used in the figma
 */
export function Icon({
  name,
  size = "l",
  style,
  svgProps,
  ...rest
}: IconProps) {
  const CompiledIcon: IconFunction = IconPack[name as IconName];

  const { iconSizes } = useTheme();
  const iconSize = iconSizes[size];

  const restyle = useRestyle(restyleFunctions, { ...rest }) as {
    style: StyleProp<ViewStyle>;
  };
  const flattenedStyle = StyleSheet.flatten([restyle.style, style]);

  return CompiledIcon ? (
    <CompiledIcon {...iconSize} style={flattenedStyle} {...svgProps} />
  ) : null;
}
