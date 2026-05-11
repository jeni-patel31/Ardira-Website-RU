import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PartnerHub from "./pages/PartnerHub";

function App() {
  return (
    <Router>
      <div style={{ width: "100%", margin: 0, background: "#fff", minHeight: "100vh", position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/partner-hub" element={<PartnerHub />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
