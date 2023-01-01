import { SheetProvider as Provider } from "react-native-actions-sheet";

import { PropsFrom } from "@/utils/types";

type SheetProviderProps = PropsFrom<typeof Provider>;

export function SheetProvider(props: SheetProviderProps) {
  return <Provider {...props} />;
}
