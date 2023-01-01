import { ReactNode } from "react";
import { StyleSheet } from "react-native";

import { ActivityIndicator } from "./activity-indicator";
import { Box } from "./box";
import { SafeAreaBox, SafeAreaBoxProps } from "./safe-area-box";

export function Screen({
  children,
  isLoading = false,
  ...rest
}: SafeAreaBoxProps & {
  children: ReactNode;
  isLoading?: boolean;
}) {
  return (
    <SafeAreaBox backgroundColor="mainBackground" flex={1} {...rest}>
      {children}
      {isLoading && (
        <Box
          alignItems="center"
          backgroundColor="black40"
          justifyContent="center"
          style={StyleSheet.absoluteFillObject}
        >
          <ActivityIndicator size="large" />
        </Box>
      )}
    </SafeAreaBox>
  );
}
