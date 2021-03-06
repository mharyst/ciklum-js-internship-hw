export default class FilmByID {
  /*@ngInject*/
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getDataByID(id) {
    return this.$http.get(`https://www.omdbapi.com/?i=${id}&plot=full&r=json&apikey=604bc11d`)
    .then(response => response.data)
    .catch((error) => {
      alert('Error');
      throw new Error(error.status + error.statusText);
    });
  }
}
