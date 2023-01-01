import { createText } from "@shopify/restyle";

import { Theme } from "@/theme";

/**
 * Custom `Text` component with type checked layout stylings and props including typography.
 * All styles can be passed as props rather than using the StyleSheet API, and we can select a variant with predefined styles.
 *
 * Includes all the props that are available in the native `Text` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#text
 */
export const Text = createText<Theme>();

export type TextProps = React.ComponentProps<typeof Text>;
