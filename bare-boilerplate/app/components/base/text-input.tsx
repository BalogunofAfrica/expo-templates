import { createBox } from "@shopify/restyle";
import { TextInput as RNTextInput } from "react-native";

import { Theme } from "@/theme";

export const TextInput = createBox<
  Theme,
  React.ComponentProps<typeof RNTextInput>
>(RNTextInput);

export type TextInputProps = React.ComponentProps<typeof TextInput>;
