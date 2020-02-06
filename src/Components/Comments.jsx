import React, { Component } from "react";
import { getComments } from "../Api";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => console.dir(err));
  }
  // the only place you can add the comments -> setstate

  addNewComment = addNewComment => {
    this.setState(currentState => {
      return { comments: [...currentState.comments, addNewComment] };
    });
  };

  render() {
    return (
      <div className="comments">
        <AddComment addNewComment={this.addNewComment} />
        {this.state.comments.map(comment => (
          <div className="each-comment" key={comment.comment_id}>
            <h5>{`Comment by ${comment.author}`}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
