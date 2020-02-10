import React, { Component } from "react";
import { getArticle } from "../Api";
import Comments from "./Comments";
import Loading from "./Loading";
import styles from "../CSS/Article.module.css";

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
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div className={styles.fullarticle} key="article">
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
