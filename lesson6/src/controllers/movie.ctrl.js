export default class MovieCtrl {
  /* @ngInject */
  constructor($http, $routeParams) {
    this.$http = $http;
    this.id = $routeParams.id;
    this.infoAbout(this.id);
  }

  getDataByID(id) {
    return this.$http.get(`https://www.omdbapi.com/?i=${id}&plot=full&r=json&apikey=c2087786`)
    .then(response => response.data)
    .catch((error) => {
      alert('Error');
      throw new Error(error.status + error.statusText);
    });
  }

  infoAbout(id) {
    this.getDataByID(id)
      .then(response => {
        if (response.Error) {
          alert(response.Error);
        } else {
          this.showDetails(response);
          console.log(response);
        }
      });
  }

  showDetails(response) {
    this.movie = response;
  }

}
