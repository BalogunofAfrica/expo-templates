import * as Updates from "expo-updates";
import React from "react";

import { Box, Text } from "@/components/base";

import { Button } from "../button/button";

/**
 * Restarts the app on press
 */
const handleRestart = async () => {
  Updates.reloadAsync();
};

/**
 * Fallback Screen for ErrorBoundary, this screen is displayed when the app crashes
 * due to an error in our component tree.
 */
export function FallBack() {
  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Text>Oops 😞!</Text>
      <Text>We Encountered an error,</Text>
      <Button label="Restart the app" onPress={handleRestart} />
    </Box>
  );
}
