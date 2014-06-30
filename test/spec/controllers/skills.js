'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('castleBioApp'));

  var SkillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of skills to the scope', function () {
    expect(scope.skills.length).toBe(5);
  });
});
