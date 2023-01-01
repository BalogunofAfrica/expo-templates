import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { loadFont } from "@/theme/load-fonts";
import { logger } from "@/utils/functions";

export function useAppStart() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFont();
      } catch (error) {
        logger.warn(error);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
