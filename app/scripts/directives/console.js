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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('steve@castle.net : ~$');
        console.log(attrs);
      }
    };
  });
