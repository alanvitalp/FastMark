import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      defaultOrange: string;
      defaultYellow: string;
      locationBackground: string;
      discountIconColor: string;
      greyBackground: string;
      tabIconColor: string;
      black: string;
      white: string;
      darker: string;
      dark: string;
      regular: string;
      light: string;
      lighter: string;
      transparent: string;
    },
    font: {
      bigger: number;
      big: number;
      regular: number;
      small: number;
      smaller: number;
    }
  }
}
