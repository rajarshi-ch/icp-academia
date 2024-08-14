

import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { se } from 'date-fns/locale';

export const colors = {
  text: {
    blueBlack: "#334155",
    gray : "#6B7280",
    darkGray : '#111928',
    blueGray : "#505780",
  },
  black: "#0F172A",
  lightGray: "#E4ECF7",
  primaryBlue: "#0EA5E9",
  secondaryBlue: "#4C6FFF",
  tertiaryBlue: "#E1E8FF",
  success: "#38A169",
  error: "#E53E3E",
  warning: "#DD6B20",
};

//Define default component style behaviours here
const components = {
  Text: {
    baseStyle: (props: { colorMode: string }) => ({
      color: props.colorMode === "dark" ? "white" : "text.blueBlack",
      fontFamily: "inter",
    }),
  },
};

const theme = extendTheme({
  fonts: {
    heading: 'Inter, Open Sans, sans-serif',
    body: 'Inter, Open Sans, sans-serif',
  },
  components,
  colors,
});

export default theme;