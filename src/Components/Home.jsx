import React from "react";
import ArticlesList from "./ArticlesList";
import styles from "../CSS/Home.module.css";
// import Loading from "./Loading";

const Home = props => {
  // const { isLoading } = this.state;
  return (
    <div className={styles.home}>
      <div className={styles.homedescription}>
        {`Welcome to NC News ${props.username}, navigate and enjoy!`}
        {/* name undefined */}
      </div>

      <ArticlesList />
    </div>
  );
};

export default Home;
