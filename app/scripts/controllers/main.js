'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Root screen of Steve Castle's online resume. Features prominent content from other areas.
 */
angular.module('castleBioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
