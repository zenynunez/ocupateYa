'use strict';

angular.module('ocupateYaApp')
  .directive('fulldiv', function($window){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
      	var inner   = $window.innerHeight;
      	var contact = inner - 100;
		$(element).height(inner);
		$('.angular-google-map-container').height(inner);
		$('.contact-over').css('margin-top', '-'+contact+'px');
      }
    };
  });
