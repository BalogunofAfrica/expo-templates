import { FlashList, FlashListProps } from "@shopify/flash-list";
import React, { forwardRef, ReactElement } from "react";

export type ListRendererProps<T> = FlashListProps<T>;
export type ListRendererRefType<T> = FlashList<T>;

function ListComponent<T>(
  props: ListRendererProps<T>,
  ref: React.Ref<ListRendererRefType<T>>,
) {
  return <FlashList ref={ref} {...props} />;
}

/**
 * Component to abstract Flashlist library interface
 *
 * Flashlist can be replaced in future with any more performant library that meets the interface of
 * a FlatList:
 * ```
 * <FlastList
 *    data={data}
 *    renderItem={renderItem}
 *    keyExtractor={keyExtractor}
 * />
 * ```
 * This abstraction with such contract ensures that anywhere the `ListRenderer` component is been used wouldn't break when
 * the underlying implementation (library) changes
 */
export const ListRenderer = forwardRef(ListComponent) as <T>(
  props: ListRendererProps<T> & { ref?: React.Ref<ListRendererRefType<T>> },
) => ReactElement;
