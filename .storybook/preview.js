import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

export const parameters = {
  backgrounds: {
    default: "mui dark theme bg",
    values: [
      {
        name: "mui dark theme bg",
        value: "#131918",
      },
      {
        name: "mui light theme bg",
        value: "#3b5998",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
