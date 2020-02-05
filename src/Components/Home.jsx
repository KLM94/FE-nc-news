import React from "react";
import ArticlesList from "./ArticlesList";

const Home = () => {
  return (
    <div className="home">
      <p className="home-description">
        Welcome to NC News, navigate and enjoy!
      </p>

      <ArticlesList />
    </div>
  );
};

export default Home;
