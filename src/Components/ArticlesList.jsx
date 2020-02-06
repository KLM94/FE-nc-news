import React, { Component } from "react";
import { getArticles } from "../Api";
import { Link } from "@reach/router";

class ArticlesList extends Component {
  state = {
    articleData: [],
    isLoading: true,
    sortBy: ""
  };

  componentDidMount() {
    getArticles(this.props.topic, this.state.sortBy)
      .then(response => {
        this.setState({ articleData: response.data.articles });
      })
      .catch(err => console.dir(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortBy !== prevState.sortBy) {
      getArticles(this.props.topic, this.state.sortBy)
        .then(response => {
          this.setState({ articleData: response.data.articles });
        })
        .catch(err => console.dir(err));
    }
  }

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    return (
      <div className="articles-list">
        <div className="drop-down">
          <p className="sort-by-articles">Sort articles by</p>
          <select onChange={this.handleChange}>
            <option value="created_at">Date Created</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </div>
        {this.state.articleData.map(article => (
          <div className="article" key={article.title}>
            <span className="article-author-and-date">
              <em>
                {`Published by ${article.author} on ${new Date(
                  article.created_at
                ).toLocaleDateString()} in ${article.topic}`}
              </em>
            </span>

            <div className="article-title">
              <h2> {article.title} </h2>
            </div>
            <div className="article-body">
              <p> {article.body} </p>
            </div>
            <div className="article-votes">
              <p> Votes: {article.votes}</p>
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
