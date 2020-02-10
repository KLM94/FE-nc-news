import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navelement}>
        HOME
      </Link>
      <Link to="/topics" className={styles.navelement}>
        TOPICS
      </Link>
      <Link to="/articles" className={styles.navelement}>
        ARTICLES
      </Link>
    </div>
  );
};

export default Navbar;
