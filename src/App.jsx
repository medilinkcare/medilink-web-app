import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react"

const Login =lazy(() => import("./pages/Auth/Login.jsx"));
const Register =lazy(() => import("./pages/Auth/Register.jsx"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import LandingLayout from "./components/LandingLayout";
import HeroSection from "./components/HeroSection.jsx";
const HomePage = lazy(() => import("./components/HomePage.jsx"));
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Dashboard = lazy(() => import( "./pages/Dashboard.jsx"));
const Profile = lazy(() => import( "./pages/Profile.jsx"));
const About = lazy(()=> import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
import ProblemSolved from "./components/ProblemSolved.jsx";
import Advantage from "./components/Advantage.jsx";
import Appeal from "./components/Appeal.jsx";
import FAQPage from "./components/FAQPage.jsx";
import "./App.css";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <Router>
        <Navbar />
        
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/herosection" element={<HeroSection/>} />
            <Route path="/faq" element={<FAQPage/>} />
            <Route path="/appeal" element={<Appeal/>} />
            <Route path="/problemsolved" element={<ProblemSolved/>} />
            <Route path="/advantage" element={<Advantage/>} />
          </Routes>
          <Footer />
      </Router>
        
    );
  }
}

// Simple 404 component
function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App;
