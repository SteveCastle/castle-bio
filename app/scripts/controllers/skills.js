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
    $scope.skills =[{'title': 'Front End', 'description': 'TODO: Description of level of experience.'},
    {'title': 'Back End', 'description': 'TODO: Description of level of experience.'},
    {'title': 'Deployment', 'description': 'TODO: Description of level of experience.'},
    {'title': 'Workflow and Tooling', 'description': 'TODO: Description of level of experience.'},
    {'title': 'Management', 'description': 'TODO: Description of level of experience.'},
    ];
  });
