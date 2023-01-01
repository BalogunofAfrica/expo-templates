/* eslint-disable consistent-return */
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";
import { useEffect } from "react";

import { isWeb } from "@/constants";

export function useOnlineManager() {
  useEffect(() => {
    if (!isWeb) {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          !!state.isConnected && !!state.isInternetReachable,
        );
      });
    }
  }, []);
}
