import { useCallback, useState } from "react";
import { StyleProp, StyleSheet } from "react-native";
import { ImageStyle } from "react-native-fast-image";

import { wp } from "@/constants/layout";
import { Theme, useTheme } from "@/theme";

import { ActivityIndicator } from "./activity-indicator";
import { Box, BoxProps } from "./box";
import { ImageBox, ImageBoxProps } from "./image-box";

/**
 * Custom Network image component
 */
type Radii = Theme["borderRadii"];
export type NetworkImageProps = ImageBoxProps & {
  radius?: keyof Radii;
  containerProps?: BoxProps;
  customStyles?: StyleProp<ImageStyle>;
  height: number;
  numberOfRetries?: number;
  width: number;
};

export function NetworkImage({
  radius = "nill",
  containerProps,
  customStyles,
  height,
  numberOfRetries = 3,
  width,
  ...rest
}: NetworkImageProps) {
  const { borderRadii } = useTheme();

  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const onError = useCallback(() => {
    if (key < numberOfRetries) {
      setKey((_key) => _key + 1);
    }
  }, [key, numberOfRetries]);

  const styles = StyleSheet.create({
    image: {
      borderRadius: borderRadii[radius],
      height: wp(height),
      margin: 0,
      width: wp(width),
    },
  });

  const customStyle = StyleSheet.flatten(customStyles);
  return (
    <Box {...containerProps}>
      {loading && <ActivityIndicator />}
      <ImageBox
        key={key}
        {...rest}
        onError={onError}
        onLoadEnd={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        style={[styles.image, customStyle]}
      />
    </Box>
  );
}
