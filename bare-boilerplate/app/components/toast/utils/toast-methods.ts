import Toast, { ToastShowParams } from "react-native-toast-message";

import { appStore } from "@/services/storage/global";

// eslint-disable-next-line import/no-cycle
import { ToastConfig } from "../config";

type ToastShow = ToastShowParams & {
  type: keyof ToastConfig;
  withToastOverlay?: boolean;
};

export const toastMethods = {
  hide: () => {
    appStore.setWithToastOverlay(false);
    Toast.hide();
  },
  show: (params: ToastShow) => {
    if (params.withToastOverlay) appStore.setWithToastOverlay(true);
    Toast.show(params);
  },
};
