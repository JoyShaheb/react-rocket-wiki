import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorPage, Capsules, Cores, History, Dragons } from "./pages";
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
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/cores" element={<Cores />} />
            <Route path="/history" element={<History />} />
            <Route path="/dragons" element={<Dragons />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
