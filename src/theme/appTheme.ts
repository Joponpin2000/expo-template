type ThemeType = typeof appTheme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appTheme = {};
