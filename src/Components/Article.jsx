import React, { Component } from "react";
import { getArticle } from "../Api";

class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    getArticle(this.props.id)
      .then(response => {
        this.setState({ article: response.data.article });
      })
      .catch(err => console.dir(err));
  }

  render() {
    const { article } = this.state;
    return (
      <div className="full-article">
        <p>{`You are now viewing articles for ${article.topic}`}</p>
        <h2> {article.title} </h2>
        {`Published by ${article.author} on ${new Date(
          article.created_at
        ).toLocaleDateString()}`}
        <p>{article.body}</p>
        <p>{`Votes: ${article.votes}`}</p>
        <p>{` Click here to view ${article.comment_count} comments`}</p>
      </div>
    );
  }
}

export default Article;
