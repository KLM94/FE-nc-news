import React from "react";
import ArticlesList from "./ArticlesList";
// import Loading from "./Loading";

const Home = props => {
  // const { isLoading } = this.state;
  return (
    <div className="home">
      <div className="home-description">
        {`Welcome to NC News ${props.username}, navigate and enjoy!`}
        {/* name undefined */}
      </div>

      <ArticlesList />
    </div>
  );
};

export default Home;
