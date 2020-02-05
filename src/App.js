import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Article from "./Components/Article";
import ArticlesList from "./Components/ArticlesList";
import Topics from "./Components/Topics";
import Topic from "./Components/Topic";
import Comments from "./Components/Comments";
import "./CSS/App.css";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Header title="NC News"> </Header>
      <Navbar />
      <Router>
        <Home path="/" />
        <Article path="/articles/:id" />
        <ArticlesList path="/articles" />
        <Comments path="/articles/:id/comments" />
        <Topics path="/topics/" />
        <Topic path="/topics/:topic" />
      </Router>
    </div>
  );
}

export default App;
