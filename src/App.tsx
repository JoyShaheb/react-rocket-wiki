import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorPage } from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const uiTheme = useSelector((store: RootState) => store.system.mode);
  return (
    <ThemeProvider theme={theme(uiTheme)}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
