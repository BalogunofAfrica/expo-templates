import { useTranslation } from "react-i18next";
import { ToastConfigParams } from "react-native-toast-message";

import { Box, Text } from "@/components/base";

export type DemoToastProps = unknown;

export function DemoToast({ text1 }: ToastConfigParams<DemoToastProps>) {
  const { t } = useTranslation();

  return (
    <Box>
      <Text
        color="secondary600"
        fontWeight="600"
        marginBottom="s"
        textAlign="left"
        variant="heading24-Bold"
      >
        {t("toast.otp.title")}
      </Text>
      <Text textAlign="left" variant="body16-Regular">
        {t("toast.otp.body-prefix")}
        <Text color="primary600" fontWeight="600" variant="body16-Bold">
          {text1}
        </Text>
        {t("toast.otp.body-postfix")}
      </Text>
    </Box>
  );
}
