'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:console
   @restrict E
   @scope
 * @description
 * # console
 */
angular.module('castleBioApp')
  .directive('console', ['$location',function () {
    return {
      template: '<div ng-keypress="processKeyPress($event)" tabindex="0" class="command"><h1><span class="prompt">steve.castle@wintermute&gt;&nbsp;{{command}}</span><span class="cursor">&nbsp;</span></h1></div>',
      restrict: 'E',
      scope: {},
      controller: function ($scope, $location) {
        $scope.command = '';

        $scope.processKeyPress = function($event){
          if($event.keyCode === 13){
            $location.url('/' + $scope.command);
            console.log($location.path());
            $scope.command = '';
            return false;
          }
          $scope.command = $scope.command + String.fromCharCode($event.charCode).toLowerCase();
          console.log($event);
        };
      }
    };
  }]);