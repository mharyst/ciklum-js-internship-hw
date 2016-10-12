import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	comments: this.props.comments
    };
  }

  render() {
    const comments = this.state.comments.map((value, index) => {
   		return <li key={index}>{value}</li>
    })
  return (
    <div>
      <ul>{comments}</ul>
      <form class="comments-form">
        <textarea class="comment-text" name="name" placeholder="Comment text"></textarea>
        <button type="submit" name="button" class="btn">Send</button>
        </form>
    </div>
    );
  }
}
