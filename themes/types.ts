import { DeepPartial } from "vite-plugin-checker/dist/esm/types";
import { defaultTheme } from "./list/blck";

export interface Theme {
  name: string;
  extend: DeepPartial<(typeof defaultTheme)["extend"]>
}

export function createTheme(theme: Theme) {
  return {
    name: theme.name,
    selectors: [`.theme-${theme.name}`],
    extend: theme.extend
  }
}
