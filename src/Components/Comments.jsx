import React, { Component } from "react";
import { getComments, deleteComment } from "../Api";
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

  addNewComment = addNewComment => {
    this.setState(currentState => {
      return { comments: [addNewComment, ...currentState.comments] };
    });
  };

  handleDelete = comment_id => {
    const { comments } = this.state;
    deleteComment(comment_id);
    const filteredComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState({ comments: filteredComments });
  };

  render() {
    //const { handleDelete } = this.props;
    // if (this.state.comments > 0) {
    return (
      <div className="comments">
        <AddComment
          addNewComment={this.addNewComment}
          articleId={this.props.article_id}
        />
        {this.state.comments.map(comment => (
          <div className="each-comment" key={comment.comment_id}>
            <h5>{`Comment by ${comment.author} on ${new Date(
              comment.created_at
            ).toLocaleDateString()}`}</h5>
            <p>{comment.body}</p>
            <button
              className="delete-button"
              onClick={() => this.handleDelete(comment.comment_id)}
            >
              Delete comment
            </button>
          </div>
        ))}
      </div>
    );
    // }
    // return "There are no comments associated with this article yet.";
  }
}

export default Comments;
