/* eslint-disable no-restricted-syntax */
import { registerSheet } from "react-native-actions-sheet";

import { DemoSheet } from "./sheets";

const sheets = {
  demo: DemoSheet,
} as const;

export type Sheets = typeof sheets;
export type SheetNames = keyof Sheets;

for (const sheet of Object.keys(sheets) as SheetNames[]) {
  registerSheet(sheet, sheets[sheet]);
}

export {};
