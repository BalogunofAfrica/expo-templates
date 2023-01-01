import { Text, TextProps } from "@/components/base";

import { Pressable, PressableProps } from "./pressable";

export type PressableTextProps = PressableProps & {
  text: string;
  textProps?: TextProps;
};

export function PressableText({
  text,
  textProps,
  ...rest
}: PressableTextProps) {
  return (
    <Pressable {...rest}>
      <Text {...textProps}>{text}</Text>
    </Pressable>
  );
}
