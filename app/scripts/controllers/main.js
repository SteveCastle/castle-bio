'use strict';
/*jshint multistr: true */
/**
 * @ngdoc function
 * @name castleBioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Root screen of Steve Castle's online resume. Features prominent content from other areas.
 */
angular.module('castleBioApp')
  .controller('MainCtrl',function ($scope) {
    $scope.welcomeMessage = 'Harsh green light from a terminal floods your eyes..You seem to have been out cold sitting in a strange office.  You look up at the display squinting away as\
    much light as you can manage, your head is pounding, you cant remember the last time you had a headache.\
    On your display you see the records of a specific user, it seems to be a dosier. You cant remember bringing this file up or who this user Stephen Castle is.\
      What happened to your memory, and why were you investigating this person? You resolve to dive deeper into the system to find the answer to these questions and questions and more.';
    $scope.helpItems = [{'title':'cd <dir>', 'description': ''},
                       {'title':'mail --message=<msg>', 'description': ''},
                       ];
    console.log($scope);

    $scope.setCommand = function(command){
      $scope.$parent.broadcast = command;
      console.log(command);
    };
    $scope.setWorld = function(world){
      $scope.$parent.broadcast = 'world --map '  + world;
      $scope.$parent.world = world;
      console.log(world);
    };
  });
