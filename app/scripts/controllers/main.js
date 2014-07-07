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
    $scope.welcomeMessage = 'You are agent [Redacted from File]. You open your eyes in a dark office, you must have fallen asleep working a case, the sun has gone down and\
    even the dim emerald light flashing from your terminal feels harsh.  You look up at the display squinting away as much light as you can manage, your head is pounding, thats strange\
    you never get headaches. On your display you see records relating to some investigation, it seems to be a dosier. You cant remember bringing this file up or who Stephen Castle even is.\
      What happened to your memory, and why were you investigating this character? You decide to dive deeper into the system to find the answer to these questions and questions you can not\
       yet forsee.';
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
