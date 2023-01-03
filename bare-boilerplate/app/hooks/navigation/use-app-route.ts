import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { StackParamsList } from "@/declarations/navigation";

type AppScreenProps<Screen extends keyof StackParamsList> = StackScreenProps<
  StackParamsList,
  Screen
>;

export function useAppRoute<Screen extends keyof StackParamsList>() {
  return useRoute<AppScreenProps<Screen>["route"]>();
}
