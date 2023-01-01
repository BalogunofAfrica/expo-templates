import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { Screen, Text } from "@/components/base";
import { Button } from "@/components/button";

export function ScreenOne() {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  return (
    <Screen justifyContent="center" paddingHorizontal="m">
      <Text marginBottom="m" textAlign="center">
        {t("screen.one.welcome")}
      </Text>
      <Button
        label="Go to next"
        onPress={() => {
          navigate("ScreenTwo");
        }}
      />
    </Screen>
  );
}
