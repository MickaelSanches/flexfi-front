import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Waitlist from "./views/Waitlist";
import AboutUs from "./views/AboutUs";
import Merchants from "./views/Merchants";

import Roadmap from "./views/Roadmap";
import Team from "./views/Team";
import TermsOfUse from "./views/TermsOfUse";
import PrivacyPolicy from "./views/PrivacyPolicy";
import LegalNotice from "./views/LegalNotice";

import Customers from "./views/Customers";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/merchants" element={<Merchants />} />

            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal-notice" element={<LegalNotice />} />

            <Route path="/customers" element={<Customers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
