import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 fixed w-full top-0 z-50">
      <h1>MediLink</h1>
      <nav className="flex justify-between gap-5 items-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
