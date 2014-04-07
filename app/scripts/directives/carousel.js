'use strict';

angular.module('ocupateYaApp')
  .directive('carousel', function ($timeout) {
    return {
      scope : {
        position : '@'
      },
      restrict: 'A',
      link : function (scope, element, attrs){
      	console.log(element);
      	scope.$watch(attrs.carousel, function(value) {
    		  console.log(attrs);
	   	  });
      }
    };
  });
