import React, { Component } from "react";
// import axios from "axios";
import ArticlesList from "./ArticlesList";
// import "./CSS/App.css";
// import { getArticles } from "../Api";

// const Topic -> display articles by topic

class Topic extends Component {
  state = {
    topicArticle: []
  };

  //   componentDidMount() {
  //     axios
  //       .get(
  //         `https://kirstys-nc-news.herokuapp.com/api/articles?topic=${this.props.topic}`
  //       )
  //       .then(response => {
  //         this.setState({ topicArticle: response.data.articles });
  //       })
  //       .catch(err => console.dir(err));
  //   }

  // GET PAGE FULL OF TITLES - WORK FROM THERE
  // GET RE-INTRODUCE LINK
  // MAKE ARTICLES LIST API MORE REUSABLE AND ALMOST SAME
  // TEMPLATE LITERALS ON URL FOR QUERY

  render() {
    return (
      //   <div className="articles">
      //     <h2 className="topic-header"> {this.props.topic} </h2>
      //     {this.state.topicArticle.map(article => (
      //       <div className="article" key={article.topic}>
      //         <span className="article-author-and-date">
      //           <em>{`Created by ${article.author}`}</em>
      //         </span>
      //         <div className="article-title">
      //           <h2> {article.title} </h2>
      //         </div>
      //         <div className="each-articles">
      //           <p>{article.body}</p>
      //         </div>
      //         {/* <Link to={`/topics/${article.topic}`}>{article.body}</Link> */}
      //       </div>
      //     ))}
      //   </div>
      <div>
        <h2 className="topic-header"> {this.props.topic} </h2>
        <ArticlesList topic={this.props.topic} />
      </div>
    );
  }
}

export default Topic;
