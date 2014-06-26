'use strict';

/**
 * @ngdoc overview
 * @name castleBioApp
 * @description
 * # castleBioApp
 * 
 * These docs exist mainly just for fun and exploring the grunt-ngdocs workflow. Since this personal resume is a fairly simple application that is unlikely to be reused by anyone you are quite possibly one of the only people to ever read this.
 */
angular
  .module('castleBioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/works', {
        templateUrl: 'views/works.html',
        controller: 'WorksCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
