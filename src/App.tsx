import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./views/AboutUsView";
import Home from "./views/HomeView";
import Merchants from "./views/MerchantsView";

// import LOI from "./views/LetterOfIntent";
// import LoiIntroPage from "./views/LoiIntroPage";
import Missions from "./views/MissionsView";
import WhyFlexFi from "./views/WhyFlexFi";

import EducationView from "./views/EducationView";
import FlexFiView from "./views/FlexFiView";
import Web3Explained from "./views/Web3Explained";
import StablecoinsView from "./views/StablecoinsView";
import FlexFiBNPLView from "./views/FlexFiBNPLView";
import WalletView from "./views/WalletView";

import HowItWorks from "./views/HowItWorksView";
import Roadmap from "./views/RoadmapView";
import Team from "./views/TeamView";
import TermsOfUse from "./views/TermsOfUseView";
import ScrollToTop from "./components/ScrollTop";
import WaitlistCounter from "./components/WaitlistCounter";
import ContestInfoButton from "./components/ContestInfoButton";
import PrivacyPolicy from "./views/PrivacyPolicyView";
import LegalNotice from "./views/LegalNoticeView";
import Customers from "./views/CustomersView";
import Waitlist from "./views/WaitlistView";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";
import Register from "./views/RegisterView";
import ActivateAccount from "./views/ActivateAccount";
import NotFoundView from "./views/NotFoundView";

import { useAuthStore } from "./store/authStore";
import LOI from "./views/LetterOfIntent";
import LoiIntroPage from "./views/LoiIntroPage";
import LoiSuccessView from "./views/LoiSuccessView";
import ZealyCallback from "./components/ZealyCallback";

function App() {
  const token = useAuthStore((state) => state.token);
  const isConnected = !!token;

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

            {/* <Route path="/letter-of-intent" element={<LOI />} />
            <Route path="/loi-intro-page" element={<LoiIntroPage />} /> */}
            <Route path="/missions" element={<Missions />} />
            <Route path="/why-flexfi" element={<WhyFlexFi />} />

            <Route path="/education" element={<EducationView />} />
            <Route path="/education/flexfi" element={<FlexFiView />} />
            <Route
              path="/education/web3-explained"
              element={<Web3Explained />}
            />
            <Route
              path="/education/stablecoins"
              element={<StablecoinsView />}
            />
            <Route path="/education/bnpl" element={<FlexFiBNPLView />} />
            <Route path="/education/wallets" element={<WalletView />} />

            <Route path="/why-flexfi" element={<WhyFlexFi />} />

            <Route path="/education" element={<EducationView />} />
            <Route path="/education/flexfi" element={<FlexFiView />} />
            <Route
              path="/education/web3-explained"
              element={<Web3Explained />}
            />
            <Route
              path="/education/stablecoins"
              element={<StablecoinsView />}
            />
            <Route path="/education/bnpl" element={<FlexFiBNPLView />} />
            <Route path="/education/wallets" element={<WalletView />} />

            <Route path="/customers" element={<Customers />} />

            <Route path="/loi-intro-page" element={<LoiIntroPage />} />
            <Route path="/letter-of-intent" element={<LOI />} />
            <Route path="/loi-success/:id" element={<LoiSuccessView />} />

            <Route path="/register" element={<Register />} />
            <Route path="/activate" element={<ActivateAccount />} />
            <Route path="/login" element={<LoginView />} />
            <Route
              path="/dashboard"
              element={isConnected ? <DashboardView /> : <LoginView />}
            />
            <Route path="/zealy/callback" element={<ZealyCallback />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <ContestInfoButton />
      </div>

      <div className="fixed bottom-20 left-4 z-50">
        <WaitlistCounter />
      </div>
    </Router>
  );
}

export default App;
