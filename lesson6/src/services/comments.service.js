export default class CommentsService {
  sendComment(commentText, filmID) {
    if (localStorage.getItem('comments')) {
      let comments = localStorage.getItem('comments');
      this.comments = JSON.parse(comments);
    } else {
      this.comments = [];
    }
    this.currentComment = {id: filmID, text: commentText, date: Date.now()}
    this.comments.push(JSON.stringify(this.currentComment));
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  getComments() {
    return JSON.parse(localStorage.getItem('comments'));
  }

  deleteComment(date) {
    let comments = JSON.parse(localStorage.getItem('comments'));
    let newComments = comments.filter((comment) => {
      let newComment = JSON.parse(comment);
      if (newComment.date == date) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem('comments', JSON.stringify(newComments));
  }
}
