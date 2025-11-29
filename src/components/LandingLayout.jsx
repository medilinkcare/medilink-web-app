import LandingHeader from "./layout/LandingHeader";
import Footer from "./layout/Footer";

const LandingLayout = ({children}) => {
  return (
    <>
      <LandingHeader />
        {children}
      <Footer />
    </>
  );
};
export default LandingLayout;
