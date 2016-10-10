export default class SearchCtrl {
  /* @ngInject */
  constructor(SearchService, FilmByID, $http, $q, $scope) {
    this.SearchService = SearchService;
    this.FilmByID = FilmByID;
    this.$http = $http;
    this.$q = $q;
    this.searchInput = '';
    this.searchFlag = false;
    this.refresh();
    this.favCount();
    this.results = [];
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
    this.SearchService.getData(this.searchInput, page, this.searchType, this.searchYear)
      .then(response => {
        if (response.Error) {
          alert(response.Error);
        } else {
          this.createFavList();
          this.pagesCalc(response.totalResults);
          this.checkFav(response.Search);
          this.searchTotalResults = response.totalResults;
        }
      });
  }

  createFavList() {
    this.favList = [];
    localStorage.getItem("favList") !== null ? console.log('already created') : localStorage.setItem("favList", JSON.stringify(this.favList));
  }

  checkFav(resultsFromSearch) {
    this.results = resultsFromSearch.filter((resultFromSearch) => {
      let favListFromLS = JSON.parse(localStorage.getItem("favList"));
      if (favListFromLS.indexOf(resultFromSearch.imdbID) === -1) {
        return true;
      } else {
        return false;
      }
    });
    // Searching in fav list and show only results
    // this.favResults = resultsFromSearch.filter((resultFromSearch) => {
    //   if (localStorage.getItem(resultFromSearch.imdbID) !== null) {
    // 		return true;
    // 	}
    // });
  }

  clearFav() {
    localStorage.removeItem('favList');
    this.refresh();
  }

  toggleFav(id) {
    if (id.imdbID) var id = id.imdbID;
    this.favList = JSON.parse(localStorage.getItem("favList"));
    if (this.favList.indexOf(id) === -1) {
      this.favList.push(id);
    } else {
      this.favList.splice(this.favList.indexOf(id), 1);
    };
    localStorage.setItem('favList', JSON.stringify(this.favList));
  }

  showFav() {
    this.favResults = [];
    if (localStorage.getItem("favList")) {
      this.favListIDs = JSON.parse(localStorage.getItem("favList"));
      var self = this;
      this.favListIDs.forEach(function(id) {
        self.FilmByID.getDataByID(id)
        .then(response => {
          if (response.Error) {
            alert(response.Error);
          } else {
            self.favResults.push(response);
          }
        });
      });
    }
  }

  favCount() {
    if (localStorage.getItem('favList')) {
      let favList = JSON.parse(localStorage.getItem('favList'));
      this.favLength = favList.length;
    } else {
      return false;
    }
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
    if (this.searchInput.length > 1) this.search();
    this.showFav();
    this.favCount();
    console.log('refreshed');
  }

}
