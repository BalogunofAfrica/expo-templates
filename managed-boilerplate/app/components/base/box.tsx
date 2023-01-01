import { createBox } from "@shopify/restyle";

import { Theme } from "@/theme";

/**
 * Custom `View` component with type checked layout stylings and props.
 * All styles can be passed as props rather than using the StyleSheet API.
 *
 * Includes all the props that are available in the native `View` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#box
 */
export const Box = createBox<Theme>();

export type BoxProps = React.ComponentProps<typeof Box>;
