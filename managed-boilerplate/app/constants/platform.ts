import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";

export { isAndroid, isIos, isWeb };
