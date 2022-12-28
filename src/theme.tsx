import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   default: "#131918",
    //   paper: "#22292e",
    // },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const theme = (theme: any) => {
  return theme === "dark" ? darkTheme : lightTheme;
};