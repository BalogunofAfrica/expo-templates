import { useTranslation } from "react-i18next";

import { Screen, Text } from "@/components/base";

export function ScreenTwo() {
  const { t } = useTranslation();
  return (
    <Screen justifyContent="center" paddingHorizontal="m">
      <Text marginBottom="m" textAlign="center">
        {t("screen.two.welcome")}
      </Text>
    </Screen>
  );
}
