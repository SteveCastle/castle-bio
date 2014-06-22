'use strict';

describe('Service: Worldloader', function () {

  // load the service's module
  beforeEach(module('castleBioApp'));

  // instantiate service
  var Worldloader;
  beforeEach(inject(function (_Worldloader_) {
    Worldloader = _Worldloader_;
  }));

  it('should do something', function () {
    expect(!!Worldloader).toBe(true);
  });

});
