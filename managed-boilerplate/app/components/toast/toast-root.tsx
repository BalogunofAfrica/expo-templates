import Toast from "react-native-toast-message";

import { appStore } from "@/services/storage/global";

import { toastConfig } from "./config";

export function ToastRoot() {
  return (
    <Toast
      config={toastConfig}
      onHide={() => appStore.setWithToastOverlay(false)}
    />
  );
}
