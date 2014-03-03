'use strict';

angular.module('ocupateYaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.personas     = true;
    $scope.empresa      = false;
    $scope.currentDate  = new Date().getFullYear(); 
    //google-maps object setting values
    $scope.map = {
    	center : {
        latitude: 43.653218,
        longitude: -77.383173
    	},
    	marker : {
        latitude: 43.653218,
        longitude: -79.383173
      },
    	zoom : 8
		};

    /*-====-Event Handlers-====-*/
    $scope.empresas = function(){
      $scope.personas = false; 
      $scope.empresa  = true;
    }

    $scope.persona = function(){
      $scope.personas = true;
      $scope.empresa  = false;
    }
  });

