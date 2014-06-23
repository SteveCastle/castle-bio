'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the castleBioApp
 */
angular.module('castleBioApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.blogs = [
        {'title': 'Blog Item 1', 'body': 'Body'}
      ];
  });
