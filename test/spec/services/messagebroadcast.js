'use strict';

describe('Service: Messagebroadcast', function () {

  // load the service's module
  beforeEach(module('castleBioApp'));

  // instantiate service
  var Messagebroadcast;
  beforeEach(inject(function (_Messagebroadcast_) {
    Messagebroadcast = _Messagebroadcast_;
  }));

  it('should do something', function () {
    expect(!!Messagebroadcast).toBe(true);
  });

});
