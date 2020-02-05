import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../Api";
// import Topic from "./Topic";

class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    getTopics() // have to return a promise to use .then
      .then(response => {
        this.setState({ topics: response.data.topics });
      })
      .catch(err => console.dir(err));
  }

  render() {
    return (
      <div className="all-topics">
        {this.state.topics.map(topic => (
          <div key={topic.slug} className="topics">
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Topics;
