import "../components/Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="sub-navbar">
        <h2>Ha</h2>
        <ul>
          <a>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
          </a>
          <a>
            <Link to={"/About"}>
              <li>About</li>
            </Link>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a>
            <Link to={"/Blog"}>
              <li>Blog</li>
            </Link>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
