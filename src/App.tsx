import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsTable from "./components/DetailsTable/DetailsTable";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import {
  Home,
  ErrorPage,
  Rockets,
  Capsules,
  Cores,
  Missions,
  History,
  Dragons,
  Ships,
  LandingPad,
  Launches,
  LaunchPad
} from "./pages";

function App() {
  const themeState = useSelector((state: any) => state.uiSettings.theme);
  return (
    <ThemeProvider theme={theme(themeState)}>
      <CssBaseline />
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/cores" element={<Cores />} />
            <Route path="/dragons" element={<Dragons />} />
            <Route path="/history" element={<History />} />

            <Route path="/rockets" element={<Rockets />} />
            <Route path="/rockets/:id" element={<DetailsTable />} />
            <Route path="/ships" element={<Ships />} />
            <Route path="/landing-pads" element={<LandingPad />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launch-pads" element={<LaunchPad />} />

            {/* undone */}
            {/* <Route path="/missions" element={<Missions />} /> */}

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* <Footer /> */}
        </Navbar>
      </Router>
    </ThemeProvider>
  );
}

export default App;
