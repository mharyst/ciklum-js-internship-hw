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
        }
      });
  }

  showDetails(response) {
    this.movie = response;
  }

}
