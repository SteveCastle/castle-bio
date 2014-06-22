'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the castleBioApp
 */
angular.module('castleBioApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skills =[{'title': 'Java Script'},{'title': 'HTML'},{'title': 'CSS'}];
  });
