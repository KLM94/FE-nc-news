import React, { Component } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Article from "./Components/Article";
import ArticlesList from "./Components/ArticlesList";
import Topics from "./Components/Topics";
import Topic from "./Components/Topic";
import "./CSS/App.css";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    loggedInUser: "weegembump"
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div>
        <Header
          title="NC News"
          loggedInUser={loggedInUser}
          userLogin={this.userLogin}
        ></Header>
        <Navbar />
        <Router>
          <Home path="/" loggedInUser={loggedInUser} />
          <Article path="/articles/:id" loggedInUser={loggedInUser} />
          <ArticlesList path="/articles" loggedInUser={loggedInUser} />
          <Topics path="/topics/" loggedInUser={loggedInUser} />
          <Topic path="/topics/:topic" loggedInUser={loggedInUser} />
        </Router>
      </div>
    );
  }
  userLogin = event => {
    this.setState({ loggedInUser: event.target.value });
  };
}

export default App;
