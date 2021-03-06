'use strict';

/**
 * @ngdoc overview
 * @name bitCannonApp
 * @description
 * # bitCannonApp
 *
 * Main module of the application.
 */
angular
  .module('bitCannonApp', [
    'ngAnimate',
    'ui.router',
    'angular-loading-bar',
    'angularMoment'
  ])
  .config(function($stateProvider, $urlRouterProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|magnet):/);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        pageTitle: 'Home'
      })
      .state('browse', {
        url: '/browse',
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl',
        pageTitle: 'Browse'
      })
      .state('browseSearch', {
        url: '/browse/:category',
        templateUrl: 'views/search.html',
        controller: 'BrowsesearchCtrl',
        pageTitle: 'Browse'
      })
      .state('search', {
        url: '/search/:query',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        pageTitle: 'Search'
      })
      .state('torrent', {
        url: '/torrent/:btih',
        templateUrl: 'views/torrent.html',
        controller: 'TorrentCtrl',
        pageTitle: 'Torrent'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        pageTitle: 'About'
      });
  })
  .run(function($rootScope, $window) {
    if (typeof $window.localStorage.api === 'undefined' || $window.localStorage.api === '') {
      $rootScope.api = '';// Old default http://localhost:1337
    }
    else {
      $rootScope.api = $window.localStorage.api;
    }
  });
