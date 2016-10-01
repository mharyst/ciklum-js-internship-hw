export default class MainCtrl {
  /* @ngInject */
  constructor($http, $q, $scope) {
    this.$http = $http;
    this.$q = $q;
    this.searchInput = '';
    this.refresh();
    this.results = [];
  }

  getData(title, page, type='', year='') {
    return this.$http.get(`http://www.omdbapi.com/?s=${title}&page=${page}&type=${type}&y=${year}&r=json&apikey=c2087786`)
    .then(response => response.data)
    .catch((error) => {
      alert('Error');
      throw new Error(error.status + error.statusText);
    });
  }

  search(page) {
    if (page == undefined) {
      page = 1;
      if (this.currentPage) {
        page = this.currentPage;
      }
    } else {
      page = page;
    }
    this.getData(this.searchInput, page, this.searchType, this.searchYear)
      .then(response => {
        if (response.Error) {
          alert(response.Error);
        } else {
          this.pagesCalc(response.totalResults);
          this.checkFav(response.Search);
        }
      });
  }

  toggleFav(film) {
    var id = film.imdbID;
    if (localStorage.getItem(id)){
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(id, JSON.stringify(film));
    };
  }

  showFav() {
    this.favResults = [];
    for (var key in localStorage) {
      this.favResults.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  favCount() {
    this.favLength = localStorage.length;
  }

  checkFav(resultsFromSearch) {
    this.results = resultsFromSearch.filter((resultFromSearch) => {
      if (localStorage.getItem(resultFromSearch.imdbID) === null) {
				return true;
			} else {
				return false;
			}
    });
    // this.favResults = resultsFromSearch.filter((resultFromSearch) => {
    //   if (localStorage.getItem(resultFromSearch.imdbID) !== null) {
		// 		return true;
		// 	}
    // });
  }

  pagesCalc(response) {
    var totalPages = Math.ceil(response / 10);
    var index;
    this.pages = [];
    for (index = totalPages; index >= 1; --index) {
        this.pages.unshift(index);
    }
  }

  setCurrentPage(page) {
    this.currentPage = page;
  }

  refresh() {
    this.results = [];
    this.searchInput.length > 1 ? this.search() : this.showFav();
    this.showFav();
    this.favCount();
    console.log('refreshed');
  }

}
