import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import CapsuleDetails from "./pages/Capsule/CapsuleDetails";

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
            <Route path="/capsules/:id" element={<CapsuleDetails />} />
            <Route path="/cores" element={<Cores />} />
            <Route path="/dragons" element={<Dragons />} />
            <Route path="/history" element={<History />} />

            <Route path="/rockets" element={<Rockets />} />
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
