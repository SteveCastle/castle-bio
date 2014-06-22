'use strict';

describe('Directive: console', function () {

  // load the directive's module
  beforeEach(module('castleBioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<console></console>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the console directive');
  }));
});
