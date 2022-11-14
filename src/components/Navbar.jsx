import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="sub-navbar">
        <h2>Ha</h2>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
