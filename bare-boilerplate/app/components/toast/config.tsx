import {
  ToastConfig as RNToastConfig,
  ToastConfigParams as RNToastConfigParams,
} from "react-native-toast-message";

import { DemoToast, DemoToastProps } from "./toasts";

type CustomToastConfig = {
  demo(props: RNToastConfigParams<DemoToastProps>): JSX.Element;
};
export type ToastConfig = CustomToastConfig & RNToastConfig;

export const toastConfig: ToastConfig = {
  demo: DemoToast,
};
