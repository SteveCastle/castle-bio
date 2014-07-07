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
 .directive('console', ['$rootScope',function ($rootScope) {
  return {
    templateUrl:'/views/partials/console.html',
    restrict: 'E',
    scope: {},
    controller: function ($scope, $location) {
      $scope.command='';
      $scope.processKeyPress = function($event){
        if($event.keyCode === 13){
          $location.url('/' + $scope.command);
          console.log($location.path());
          $scope.command = '';
          return false;
        }
        else if($event.keyCode === 46 || $event.keyCode === 8){
          $scope.command = $scope.command.slice(0, - 1);
        }
        else{
          $scope.command = $scope.command + String.fromCharCode($event.keyCode).toLowerCase();
          console.log($event);
        }

      };

      $scope.processCommand = function(){

      };
      $rootScope.$watch('broadcast', function(newValue, oldValue) {
        if(newValue !== undefined){
          $scope.command = newValue;
          console.log('New Value: ' + newValue + ' Old Value: '  + oldValue);
        }
      });
    }
  };
}]);