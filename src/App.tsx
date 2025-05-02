import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/HomeView";
import Waitlist from "./views/WaitlistView";
import AboutUs from "./views/AboutUsView";
import Merchants from "./views/MerchantsView";

import HowItWorks from "./views/HowItWorksView";
import Roadmap from "./views/RoadmapView";
import Team from "./views/TeamView";
import TermsOfUse from "./views/TermsOfUseView";
import PrivacyPolicy from "./views/PrivacyPolicyView";
import LegalNotice from "./views/LegalNoticeView";

import Customers from "./views/CustomersView";
import ScrollToTop from "./components/ScrollTop";
import WaitlistCounter from "./components/WaitlistCounter";

import Register from "./views/RegisterView";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal-notice" element={<LegalNotice />} />

            <Route path="/customers" element={<Customers />} />

            <Route path="/register" element={<Register />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <WaitlistCounter />
      </div>
    </Router>
  );
}

export default App;
