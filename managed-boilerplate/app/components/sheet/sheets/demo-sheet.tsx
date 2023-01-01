import React from "react";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";

import { Box, SafeAreaBox, Text } from "@/components/base";
import { wp } from "@/constants/layout";
import { useTheme } from "@/theme";

const SHEET_HEIGHT = wp(700);

export function DemoSheet(props: SheetProps) {
  const { borderRadii, colors } = useTheme();

  return (
    <ActionSheet
      containerStyle={{
        backgroundColor: colors.mainBackground,
        borderTopLeftRadius: borderRadii.xxl,
        borderTopRightRadius: borderRadii.xxl,
        overflow: "hidden",
        padding: 0,
      }}
      defaultOverlayOpacity={0.4}
      gestureEnabled
      id={props.sheetId}
      indicatorStyle={{
        height: 0,
      }}
    >
      <SafeAreaBox
        backgroundColor="mainBackground"
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
        edges={["bottom"]}
        height={SHEET_HEIGHT}
        overflow="hidden"
        paddingBottom="sl"
        paddingHorizontal="l"
        paddingTop="l"
      >
        <Box flex={1} justifyContent="space-around">
          <Text>Heyy</Text>
        </Box>
      </SafeAreaBox>
    </ActionSheet>
  );
}
