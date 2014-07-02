'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:ngPackery
 * @description
 * # ngPackery
 */
angular.module('castleBioApp')
  .directive('ngPackery', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
				console.log(attrs);
				if (scope.packery === null || scope.packery === undefined){
				  scope.packery = new Packery(element[0].parentElement, {columnWidth: 100, gutter: 50, isResizeBound: true});
				}
			  $timeout(function(){scope.packery.layout();},1);
		  }
  };
    
}]);
