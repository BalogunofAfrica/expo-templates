import { createText } from "@shopify/restyle";

import { Theme } from "@/theme";
import { forwardRef } from "react";
import { TFontValues } from "@/theme/config/fonts";

/**
 * Custom `Text` component with type checked layout stylings and props including typography.
 * All styles can be passed as props rather than using the StyleSheet API, and we can select a variant with predefined styles.
 *
 * Includes all the props that are available in the native `Text` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#text
 */
export const RestyleText = createText<Theme>();

export type TextProps = Omit<
  React.ComponentProps<typeof RestyleText>,
  "fontFamily"
> & {
  fontFamily?: TFontValues;
};

export const Text = forwardRef((props: TextProps, ref) => {
  return <RestyleText ref={ref} {...props} />;
});
