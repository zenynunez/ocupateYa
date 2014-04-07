'use strict';

describe('Directive: carousel', function () {

  // load the directive's module
  beforeEach(module('ocupateYaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<carousel></carousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the carousel directive');
  }));
});
