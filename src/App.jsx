import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";
import Layout from "./components/layout/Layout.jsx";
import "./App.css";
import logo from "./assets/images/medilinkLogo.png";

const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const FAQs = lazy(()=> import("./components/FAQPage.jsx"))
const Advantages = lazy(()=> import("./components/Advantage.jsx"))
const HowItWorks = lazy(()=> import("./components/HowitWorks.jsx"))
const WaitList = lazy(()=> import("./components/WaitList.jsx"))

const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-whte dark:bg-gray-900 z-100">
    <div className="relative">
      <img src={logo} alt="logon" className="w-22 h-34 absolute" />
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-gray-200 border-t-transparent rounded-full animate-spin animation-delay-200"></div>
    </div>
  </div>
);

const NotFound = () => (
  <div style={{ padding: "4rem", textAlign: "center" }}>
    <h1 className="text-6xl font-bold text-red-500">404</h1>
    <p className="text-xl mt-4">Page Not Found</p>
  </div>
);

function App() {

  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Protected/Main routes with Layout */}
          <Route element={<Layout  />}>
            <Route path="/" element={<LandingPage  />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/wait-list" element={<WaitList />} />
            <Route path="/features" element={<Advantages />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
