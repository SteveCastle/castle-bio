'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Displays listing of blog features.
 */
angular.module('castleBioApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.blogs = [
        {'title': 'Blog Item 1', 'preview': 'This is a placeholder blog article.'}
      ];
  });
