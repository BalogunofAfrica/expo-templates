/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { StackScreenProps } from "@react-navigation/stack";

import { RootNavigationRoutes } from "@/navigation/root-nav";

export type StackParamsList = RootNavigationRoutes;

export type AppScreenProps<Screen extends keyof StackParamsList> =
  StackScreenProps<StackParamsList, Screen>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
