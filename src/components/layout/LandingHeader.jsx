import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className="bg-red-300 text-white flex justify-between items-center px-6 py-4 fixed w-full top-0 z-50">
      <h2>Medilink</h2>
      <ul className="flex justify-between items-center gap-4">
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};
export default LandingHeader;
