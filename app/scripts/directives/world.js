'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:world
 * @description
 * # world
 */
angular.module('castleBioApp')
  .directive('world', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text(attrs);
      }
    };
  });
