import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-element">
        Home
      </Link>
      <Link to="/topics" className="nav-element">
        Topics
      </Link>
      <Link to="/articles" className="nav-element">
        Articles
      </Link>
    </nav>
  );
};

export default Navbar;
