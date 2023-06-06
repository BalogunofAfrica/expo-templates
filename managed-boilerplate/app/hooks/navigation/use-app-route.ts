import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamsList } from "@/declarations/navigation";

type AppScreenProps<Screen extends keyof StackParamsList> =
  NativeStackScreenProps<StackParamsList, Screen>;

export function useAppRoute<Screen extends keyof StackParamsList>() {
  return useRoute<AppScreenProps<Screen>["route"]>();
}
