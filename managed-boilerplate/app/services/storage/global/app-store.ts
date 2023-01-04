import { observable } from "@legendapp/state";

type AppStore = {
  setWithToastOverlay(value: boolean): void;
  withToastOverlay: boolean;
};

export const appStore = observable<AppStore>({
  setWithToastOverlay(value) {
    appStore.withToastOverlay.set(value);
  },
  withToastOverlay: false,
});
