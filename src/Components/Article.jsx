import React, { Component } from "react";
import { getArticle } from "../Api";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    getArticle(this.props.id)
      .then(response => {
        this.setState({ article: response.data.article, isLoading: false });
      })
      .catch(err => console.dir(err));

    // getComments() {
    //   getComments().then(response => {
    //     this.s
    //   })
    // }
  }

  render() {
    const { article, isLoading } = this.state;
    // console.log(article.article_id);
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="full-article" key="article">
        <p>{`You are now viewing articles for ${article.topic}`}</p>
        <h2> {article.title} </h2>
        {`Published by ${article.author} on ${new Date(
          article.created_at
        ).toLocaleDateString()}`}
        <p>{article.body}</p>
        <p>{`Votes: ${article.votes}`}</p>
        <p>{` Scroll below to view ${article.comment_count} comments`}</p>
        <Comments article_id={article.article_id} />
      </div>
    );
  }
}

export default Article;
