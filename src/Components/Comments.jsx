import React, { Component } from "react";
import { getComments, getArticle } from "../Api";
import { Link } from "@reach/router";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getArticle(this.prop.id).then(response => {
      console.log(response.data, "hereeeee");
    });
    getComments(this.props.comments)
      .then(response => {
        console.log(response.body);
        this.setState({ comments: response.data.body });
      })
      .catch(err => console.dir(err));
  }

  render() {
    return (
      <div className="comments">
        <p> Haiii. </p>
        <Link to={`/articles/${this.props.id}/comments`} />
      </div>
    );
  }
}

export default Comments;
