'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Displays work and education history.
 */
angular.module('castleBioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
