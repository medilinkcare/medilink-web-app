import HeroSection from "../components/HeroSection.jsx";
import ProblemSolved from "../components/ProblemSolved.jsx";
import Advantage from "../components/Advantage.jsx";
import Appeal from "../components/Appeal.jsx";
import FAQPage from "../components/FAQPage.jsx";
import Waitlist from "../components/WaitList.jsx";

const LandingPage = () => {
  return (
    <>
    <section id="home">
        <HeroSection />
        <ProblemSolved />
        <Advantage />
        <Appeal />
        <FAQPage />
        <section id="waitlist">
        <Waitlist  />
        </section>
      </section>
    </>
  );
};
export default LandingPage;
