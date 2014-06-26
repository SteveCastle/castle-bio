'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller to display skills ranked by experience level.
 */
angular.module('castleBioApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skills =[{'title': 'Java Script'},{'title': 'HTML'},{'title': 'CSS'}];
  });
