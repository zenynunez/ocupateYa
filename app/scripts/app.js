'use strict';

angular.module('ocupateYaApp',[
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'google-maps'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          getPosts : function(Blog, $q) {
            var defer = $q.defer();
            Blog.getPosts().then(function(data){
              return defer.resolve(data);
            });
            return defer.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
