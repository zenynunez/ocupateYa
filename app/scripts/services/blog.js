'use strict';

angular.module('ocupateYaApp')
  .factory('Blog', function Blog($q, $http){
  	// Public API here
    return {
      
      getPosts : function(){
        var defer = $q.defer();
        $http.jsonp('http://ocupateya.com/wordpress/?json=get_posts&callback=JSON_CALLBACK').success(function(data){
          defer.resolve(data);
        });
        return defer.promise;
      }
     }
  });
