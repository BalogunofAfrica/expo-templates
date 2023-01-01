import { observable } from "@legendapp/state";

type State = {
  withToastOverlay: true | false;
};
type Actions = {
  setWithToastOverlay(value: boolean): void;
};

const state = observable<State>({
  withToastOverlay: false,
});

const actions: Actions = {
  setWithToastOverlay: (value) => state.withToastOverlay.set(value),
};

export const appStore = {
  actions,
  state,
};
