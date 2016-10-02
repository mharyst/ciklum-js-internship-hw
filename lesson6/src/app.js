'use strict';

import angular from 'angular';
import ngRoute from "angular-route";

import SearchCtrl from './controllers/search.ctrl';
import MovieCtrl from './controllers/movie.ctrl';
import PosterFilter from './filters/poster.filter';

import styles from './sass/style.scss';

angular
  .module("app", ['ngRoute'])
  .filter('PosterSource', PosterFilter)
  .controller('SearchCtrl', ['$http', SearchCtrl])
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
