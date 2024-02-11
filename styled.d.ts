import "styled-components";
import { ThemeLabel } from "../components/GlobalStyle/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    accent: string;
    shadow: string;
    white: string;
    label: ThemeLabel;
  }
}
