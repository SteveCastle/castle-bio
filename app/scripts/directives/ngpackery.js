'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:ngPackery
 * @description
 * # ngPackery
 */
angular.module('castleBioApp')
  .directive('ngPackery', ['$rootScope', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
				console.log(scope);
				if (scope.packery === null || scope.packery === undefined){
				  scope.packery = new Packery(element[0].parentElement, {columnWidth: '.contentWindow', gutter: 100, isResizeBound: true});
				}
			  scope.packery.layout();
			  window.packery = scope.packery;
		  }
  };
    
}]);
