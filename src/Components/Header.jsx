import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Header.module.css";
import { FaHome } from "react-icons/fa";

export const Header = props => {
  return (
    <div className={styles.headerbg}>
      <section className={styles.loggedinas}>
        logged in as {props.loggedInUser}
      </section>
      <header>
        <Link to={"/"}>
          <p className={styles.home}>
            <FaHome size={30} />
          </p>
        </Link>
        <h2 className={styles.headertext}>{props.title}</h2>

        {/* <p>Click to login</p>
        <button key={props.loggedInUser} onClick={props.selectUser}>
          {" "}
          {props.loggedInUser}
        </button> */}
      </header>
    </div>
  );
};

export default Header;
