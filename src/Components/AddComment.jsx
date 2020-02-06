import React, { Component } from "react";

class AddComment extends Component {
  state = {
    newComment: ""
  };

  render() {
    return (
      <div className="comments">
        <textarea
          rows="8"
          cols="80"
          placeholder="Type your comment here!"
        ></textarea>
        <form onSubmit={this.handleSubmit}>
          <input
            type="submit"
            onChange={this.handleChange}
            value="Post"
          ></input>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    const { newComment } = this.state;
    event.preventDefault();
    this.props.addNewComment(newComment);
    this.setState({ newComment: "" });
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ newComment: event.target.value });
  };
}

export default AddComment;
