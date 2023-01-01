import { SheetManager, SheetProps } from "react-native-actions-sheet";

import { PropsFrom } from "@/utils/types";

import { SheetNames, Sheets } from "../config";

type ShowPayload<T> = T extends SheetNames
  ? PropsFrom<Sheets[T]> extends SheetProps<infer P>
    ? P
    : never
  : never;

export const sheetMethods = {
  hide: <HidePayload>(
    id: SheetNames,
    options?: {
      payload?: unknown;
      context?: string;
    },
  ): Promise<HidePayload> => SheetManager.hide(id, options),
  hideAll: () => SheetManager.hideAll(),
  show: <T extends SheetNames, HidePayload>(
    id: T,
    options?: {
      payload?: ShowPayload<T>;
      onClose?: (data?: HidePayload) => void;
      context?: string;
    },
  ) => SheetManager.show<ShowPayload<T>, HidePayload>(id, options),
};
