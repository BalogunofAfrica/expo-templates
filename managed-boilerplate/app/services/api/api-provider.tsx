import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AppStateStatus } from "react-native";

import { isWeb } from "@/constants";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: "always",
      retry: 3,
      suspense: false,
    },
  },
});

export function onAppStateChange(status: AppStateStatus) {
  if (!isWeb) {
    focusManager.setFocused(status === "active");
  }
}

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
