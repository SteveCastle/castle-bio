'use strict';
/*jshint multistr: true */
/**
 * @ngdoc function
 * @name castleBioApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller to display skills ranked by experience level.
 */
angular.module('castleBioApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skills =[{'title': 'Front End', 'description': 'Over five years of experience with css, html, and javascript deploying business and artistic web applications.\
      Emphasis on clean maintainable code, and best practices.  Heavy practical experience with responsive sites, Twitter Bootstrap, Angular, JQuery, Async, SEO, and semantic layout.'},
    {'title': 'Back End', 'description': 'Significant python and RESTful API writing experience.  I have developed and maintained a large  Django application successfully for a number of years.\
     I have gathered requirements, planned, prototyped, and built a production python backend that is used by thousands of users each day. I have also used Ruby, Node, and Scala for a few smaller projects.'},
    {'title': 'Deployment', 'description': 'Capable of deploying and maintaining cloud hosting in a number of ways and have done so in production. Capable of creating High Availability AWS Depolyments or\
    deploying to most PaSS solutions.  Greatest experience is with an AWS architecture using Ubuntu application server, RDS database, and S3 storage.'},
    {'title': 'Workflow and Tooling', 'description': 'Daily usage of git for version control, and bower, grunt, jasmine, etc for dependency management, testing, and build workflow.'},
    {'title': 'Management', 'description': 'Two years of experience managing a project team at a medium sized (100-150 employees) company.'},
    {'title': 'Data Analysis', 'description': 'I scientifically analyze business performance data to make descisions.  I also use and can develop tools to automate descision making or implement machine learning to provide predictive features to applications.'},
    ];
  });
