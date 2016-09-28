'use strict';

import angular from 'angular';
import MainCtrl from './controllers/main.ctrl';
import PosterFilter from './filters/poster.filter';

import styles from './sass/style.scss';

angular
  .module("app", [])
  .filter('PosterSource', PosterFilter)
  .controller('MainCtrl', ['$http', MainCtrl]);

angular.bootstrap(document, ["app"]);
