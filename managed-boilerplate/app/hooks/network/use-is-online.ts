import { useNetInfo } from "@react-native-community/netinfo";

export function useIsOnline() {
  const netInfo = useNetInfo();
  const isOnline = !(
    netInfo.type !== "unknown" && netInfo.isInternetReachable === false
  );

  return isOnline;
}
