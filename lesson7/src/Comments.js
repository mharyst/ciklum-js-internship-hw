import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	comments: this.props.comments
    };
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addComment(event) {
    event.preventDefault();
    if (event.target.text.value) {
      console.log('added');
      const text = event.target.text;
      const comments = [{id: Date.now(), text: text.value}, ...this.state.comments];
      this.setState({comments});
    } else {
      alert('Type your comment');
    }
  }

  deleteComment(id) {
    const commentsIDs = this.state.comments.map(comment => comment.id);
    const index = commentsIDs.indexOf(id) + 1;
    const comments = [...this.state.comments.slice(index + 1), ...this.state.comments.slice(0, index)];

    this.setState({comments});
  }

  render() {
    const commentsStyles = {
      listStyle: 'none',
      fontStyle: 'normal',
      paddingLeft: 10
    }
    const commentStyle = {
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center'
    }
    const deleteCommentStyle = {
      fontSize: 10,
      color: 'red',
      marginLeft: 14,
      cursor: 'pointer'
    }
    const comments = this.state.comments.map((value, index) => {
   		return <li key={index} style={commentStyle}><span>{value.text}</span><span style={deleteCommentStyle} onClick={this.deleteComment.bind(null, index)}>Delete</span></li>
    });
  return (
    <div>
      <h2>Comments:</h2>
      <ul style={commentsStyles}>{comments}</ul>
      <form className="comments-form" onSubmit={this.addComment}>
        <textarea className="comment-text" name="text" placeholder="Comment text"></textarea><br/>
        <button type="submit" name="button" className="btn">Send</button>
      </form>
    </div>
    );
  }
}
