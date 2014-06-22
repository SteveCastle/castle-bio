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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
