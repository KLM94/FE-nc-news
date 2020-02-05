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
    return (
      <div className="full-article">
        <h1> {this.state.article.title} </h1>
      </div>
    );
  }
}

export default Article;
