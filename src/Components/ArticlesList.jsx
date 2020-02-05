import React, { Component } from "react";
import { getArticles } from "../Api";
import { Link } from "@reach/router";

class ArticlesList extends Component {
  state = {
    articleData: [],
    isLoading: true
  };

  componentDidMount() {
    getArticles(this.props.topic)
      .then(response => {
        this.setState({ articleData: response.data.articles });
      })
      .catch(err => console.dir(err));
  }

  render() {
    return (
      <div className="articles-list">
        {this.state.articleData.map(article => (
          <div className="article" key={article.title}>
            <span className="article-author-and-date">
              <em>
                {`Published by ${article.author} on ${new Date(
                  article.created_at
                ).toLocaleDateString()}`}
              </em>
            </span>
            <div className="article-title">
              <h2> {article.title} </h2>
            </div>
            <div className="article-body">
              <p> {article.body} </p>
            </div>
            <Link
              to={`/articles/${article.article_id}`} // ????
              className="nav-element"
            >
              View Full Article
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

ArticlesList.defaultProps = {
  topic: ""
};

export default ArticlesList;
