import { useSelector } from "@legendapp/state/react";
import React from "react";
import { StyleSheet } from "react-native";

import { appStore } from "@/services/storage/global";

import { Box } from "../base";

export function ToastOverlay({ children }: { children: React.ReactNode }) {
  const withToastOverlay = useSelector(() => appStore.withToastOverlay.get());

  return (
    <Box flex={1}>
      {children}
      {withToastOverlay ? (
        <Box backgroundColor="black40" style={StyleSheet.absoluteFillObject} />
      ) : null}
    </Box>
  );
}
