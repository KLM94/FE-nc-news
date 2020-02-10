import React, { Component } from "react";
import { postComment } from "../Api";

class AddComment extends Component {
  state = {
    username: "weegembump",
    body: ""
  };

  render() {
    return (
      <div className="comments">
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <textarea
            rows="8"
            cols="80"
            placeholder="Type your comment here!"
            value={this.state.body}
            onChange={e => this.handleChange(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Post"></input>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, body } = this.state;
    const { articleId } = this.props;
    this.setState({ body: "" });
    postComment({ username: username, body: body }, articleId).then(
      newComment => {
        console.log(newComment);
        this.props.addNewComment(newComment);
      }
    );
  };

  handleChange = comment => {
    this.setState({ body: comment });
  };
}

export default AddComment;
