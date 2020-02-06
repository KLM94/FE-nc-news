import React from "react";
import { Link } from "@reach/router";
// import App from "../App";

const Header = props => {
  return (
    <header>
      <Link to={"/"}>
        <p className="go-home">Go home!</p>
      </Link>
      <h2 className="header">{props.title}</h2>
      <section className="logged-in-as">
        logged in as {props.loggedInUser}
      </section>
    </header>
  );
};

export default Header;
