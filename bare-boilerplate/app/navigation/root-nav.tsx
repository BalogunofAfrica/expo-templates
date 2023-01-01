import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { withTranslation } from "react-i18next";

import { ToastOverlay } from "@/components/toast";
import { ScreenOne, ScreenTwo } from "@/screens";

import { navigationRef } from "./utils";

export type RootNavigationRoutes = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

const Stack = createStackNavigator<RootNavigationRoutes>();

function Navigation() {
  return (
    <ToastOverlay>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={ScreenOne} name="ScreenOne" />
          <Stack.Screen component={ScreenTwo} name="ScreenTwo" />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastOverlay>
  );
}

export const RootNavigation = withTranslation()(Navigation);
