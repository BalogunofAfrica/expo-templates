import "@/components/sheet/config";

import { GestureRoot, StatusBar } from "@/components/base";
import { ErrorBoundary } from "@/components/error-boundary";
import { SheetProvider } from "@/components/sheet";
import { ToastRoot } from "@/components/toast";
import { ApiProvider } from "@/services/api";
import { ThemeProvider } from "@/theme";

import { useAppStart } from "./hooks/system";
import { RootNavigation } from "./navigation";

export function App() {
  const hasAppLoaded = useAppStart();

  if (!hasAppLoaded) return null;

  return (
    <ErrorBoundary>
      <GestureRoot>
        <ApiProvider>
          <ThemeProvider>
            <SheetProvider>
              <RootNavigation />
              <ToastRoot />
              <StatusBar />
            </SheetProvider>
          </ThemeProvider>
        </ApiProvider>
      </GestureRoot>
    </ErrorBoundary>
  );
}
