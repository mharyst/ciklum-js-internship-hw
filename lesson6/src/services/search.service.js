export default class SearchService {
  /*@ngInject*/
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getData(title, page, type='', year='') {
    return this.$http.get(`https://www.omdbapi.com/?s=${title}&page=${page}&type=${type}&y=${year}&r=json&apikey=c2087786`)
    .then(response => response.data)
    .catch((error) => {
      alert('Error');
      throw new Error(error.status + error.statusText);
    });
  }
}
