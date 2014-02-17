'use strict';

angular.module('ocupateYaApp')
  .directive('fulldiv', function($window){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
      	var inner = $window.innerHeight;
		$(element).css('height', inner);
      }
    };
  });
