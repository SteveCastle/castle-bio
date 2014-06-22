'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Resume and work history.
 */
angular.module('castleBioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
