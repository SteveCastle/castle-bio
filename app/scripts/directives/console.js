'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:console
 * @description
 * # console
 */
angular.module('castleBioApp')
  .directive('console', function () {
    return {
      template: '<div ng-keydown="processKeyPress($event)" tabindex="0" class="command"><span class="prompt">steve.castle@wintermute&gt;&nbsp; {{command}}</span><span class="cursor">&nbsp;</span></div>',
      restrict: 'E',
      scope: {},
      controller: function ($scope) {
        $scope.command = '';

        $scope.processKeyPress = function($event){
          if($event.keyCode === 13){
            $scope.command = '';
            return false;
          }
          $scope.command = $scope.command + String.fromCharCode($event.keyCode);
          console.log($event);
          console.log($scope);
        };
      }
    };
  });
