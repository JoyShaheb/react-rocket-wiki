import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsTable from "./components/DetailsTable/DetailsTable";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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
} from "./pages";

function App() {
  return (
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

          {/* undone */}
          {/* <Route path="/missions" element={<Missions />} /> */}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </Navbar>
    </Router>
  );
}

export default App;
