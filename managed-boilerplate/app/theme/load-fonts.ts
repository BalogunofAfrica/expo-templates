/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
import * as Font from "expo-font";

import { Fonts } from "./config/fonts";

export const loadFont = () =>
  Font.loadAsync({
    [Fonts.OutfitBold700]: require("../assets/fonts/Outfit-Bold.ttf"),
    [Fonts.OutfitRegular400]: require("../assets/fonts/Outfit-Regular.ttf"),
  });
