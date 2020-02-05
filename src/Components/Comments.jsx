import React, { Component } from "react";
import { getComments } from "../Api";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(comments => {
        console.log(comments);
        this.setState({ comments });
      })
      .catch(err => console.dir(err));
  }

  render() {
    return (
      <div className="comments">
        {this.state.comments.map(comment => (
          <div className="each-comment" key={comment.body}>
            <h5>{`Comment by ${comment.author}`}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
