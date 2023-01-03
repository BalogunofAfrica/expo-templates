/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RootNavigationRoutes } from "@/navigation/root-nav";

export type StackParamsList = RootNavigationRoutes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
