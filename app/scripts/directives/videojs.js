'use strict';

angular.module('ocupateYaApp')
  .directive('videojs', function ($window){
    return {
      restrict: 'A',
      link: function (scope, element, attrs){
        videojs(attrs.id, { 
          "controls" : false, 
          "autoplay" : true,
          "preload"  : "auto", 
          "loop"     : true,
          "height"   : $window.innerHeight,
          "width"    : $window.innerWidth
        });
		  }
    };
  });
