'use strict';

angular.module('ocupateYaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.map = {
    	center : {
        latitude: 43.653218,
        longitude: -77.383173
    	},
    	marker : {
          latitude: 43.653218,
          longitude: -79.383173
       },
    	zoom: 8
		};
  });

