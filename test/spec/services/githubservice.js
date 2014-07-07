'use strict';

describe('Service: githubService', function () {

  // load the service's module
  beforeEach(module('castleBioApp'));

  // instantiate service
  var githubService;
  beforeEach(inject(function (githubService) {
    githubService = githubService;
  }));

  it('should be injectable', function () {
    expect(!githubService).toBe(true);
  });

});
