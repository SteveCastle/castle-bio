'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('castleBioApp'));

  var BlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of blog items to the scope', function () {
    expect(scope.blogs.length).toBe(1);
  });
});
