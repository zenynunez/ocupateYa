'use strict';

angular.module('ocupateYaApp')
  .directive('menu', function () {
    return {
    	templateUrl: 'views/menu.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.find('.nav li').bind('click', function(e){
        	e.preventDefault();
        	var target = $(this).children().attr('href');
          $('body').scrollTo(target, 1000, {
          	easing :'swing',
          	offset : {top :-50}
          });
        });

        var menuList = $('.nav').children();
        
        $(window).scroll(function(){
        	_.each(menuList, function(item){
        		var elDiv = $(item).children().attr('href');
        		$(elDiv).waypoint({
        			offset  : 50,
        			handler : function(){
        				element.find('.nav li').removeClass('active');
          			$('.'+elDiv.substring(1)).addClass('active');
          		}
        		});
        	});
        });

        element.find('.dropdown').hover(
          function(){
            $(this).find('.dropdown-menu').slideDown(500);
          },
          function(){
            $(this).find('.dropdown-menu').slideUp(500);
          }
        );
      }
    };
  });
