'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:WorksCtrl
 * @description
 * # WorksCtrl
 * Controller of the castleBioApp
 */
angular.module('castleBioApp')
  .controller('WorksCtrl', function ($scope) {
    $scope.works =[
        {'title': 'DRSS Corporate Dashboard'},
        {'title': 'Sales CRM'},
        {'title': 'Signal Viz'}
      ];
  });
