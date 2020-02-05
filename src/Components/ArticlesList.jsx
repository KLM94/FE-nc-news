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
        <div className="drop-down">
          <p className="sort-by-articles">Sort articles by</p>
          <select onChange={this.handleChange}>
            <option value="date-created">date created</option>
            <option value="comment_count">comment_count</option>
            <option value="votes">votes</option>
          </select>
        </div>
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

  handleChange(event) {
    console.log(event.target);
    this.setState({ articleData: event.target.value });
  }
}

ArticlesList.defaultProps = {
  topic: ""
};

export default ArticlesList;
