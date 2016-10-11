export default class MovieCtrl {
  /* @ngInject */
  constructor(FilmByID, CommentsService, $http, $routeParams) {
    this.FilmByID = FilmByID;
    this.CommentsService = CommentsService;
    this.$http = $http;
    this.id = $routeParams.id;
    this.infoAbout(this.id);
  }

  infoAbout(id) {
    this.FilmByID.getDataByID(id)
      .then(response => {
        if (response.Error) {
          alert(response.Error);
        } else {
          this.showDetails(response);
          this.getComments();
        }
      });
  }

  showDetails(response) {
    this.movie = response;
  }

  addComment() {
    if (this.commentText !== undefined) {
      this.CommentsService.sendComment(this.commentText, this.movie.imdbID);
      this.getComments();
      this.commentText = '';
    } else {
      alert("Enter your comment, please");
    }
  }

  getComments() {
    let filmID = this.movie.imdbID;
    if (localStorage.getItem('comments')) {
      let respComments = this.CommentsService.getComments();
      let comments = respComments.filter(function(comment) {
        let newComment = JSON.parse(comment);
        if (newComment.id == filmID) {
          return true;
        } else {
          return false;
        }
      });
      this.comments = comments.map(function(comment) {
        let newComment = JSON.parse(comment);
        return newComment;
      });
    } else {
      this.comments = [];
    }

  }

  deleteComment(date) {
    this.CommentsService.deleteComment(date);
    this.getComments();
  }

}
