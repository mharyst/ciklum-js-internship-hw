'use strict';

import angular from 'angular';
import ngRoute from "angular-route";

import SearchService from './services/search.service';
import FilmByID from './services/filmByID.service';
import CommentsService from './services/comments.service';
import SearchCtrl from './controllers/search.ctrl';
import MovieCtrl from './controllers/movie.ctrl';
import PosterFilter from './filters/poster.filter';

import styles from './sass/style.scss';

angular
  .module("app", ['ngRoute'])
  .service('SearchService', SearchService)
  .service('FilmByID', FilmByID)
  .service('CommentsService', CommentsService)
  .filter('PosterSource', PosterFilter)
  .controller('SearchCtrl', SearchCtrl)
  .controller('MovieCtrl', MovieCtrl)
  .config(function($routeProvider) {
		/* @ngInject */
		$routeProvider.
    when('/movie/:id', {
				template: require('./partials/movie.html'),
				controller: 'MovieCtrl',
				controllerAs: 'mCtrl'
			}).
    otherwise({redirectTo: '/'})
	});

angular.bootstrap(document, ["app"]);
