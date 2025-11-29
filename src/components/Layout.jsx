import Header from "./layout/Header"
import Footer from "./layout/Footer";

const LandingLayout = ({children}) => {
  return (
    <>
      <main className="mt-0">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default LandingLayout;
