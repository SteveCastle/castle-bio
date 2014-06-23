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
        {'title': 'DRSS Corporate Dashboard','category': 'enterprise' ,'description': 'Description goes here.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': 'DRSS Marketing Sites','category': 'Marketing' ,'description': 'Description goes here.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': 'Flight Board Simulator','category': 'Experimental' ,'description': 'Description goes here.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'}
      ];
  });
