import { createNavigationContainerRef } from "@react-navigation/native";

import { StackParamsList } from "@/declarations/navigation";

export const navigationRef = createNavigationContainerRef();

export type Navigation = {
  goBack: () => void;
  navigate: <RouteName extends keyof StackParamsList>(
    ...args: RouteName extends unknown
      ? undefined extends StackParamsList[RouteName]
        ?
            | [screen: RouteName]
            | [screen: RouteName, params: StackParamsList[RouteName]]
        : [screen: RouteName, params: StackParamsList[RouteName]]
      : never
  ) => void;
};

export const navigation: Navigation = {
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
  navigate: (...args) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(...args);
    }
  },
};
