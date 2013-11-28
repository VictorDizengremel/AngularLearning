/**
 * Created by dizen_000 on 28/11/13.
 */
var myApp =angular.module("myApp",[]);
myApp.factory('Data', function(){
    return {message: "I'm data from a service"};
})

myApp.directive("enter", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            element.addClass(attrs.enter)
        })
    }
})

myApp.directive("leave", function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            element.removeClass(attrs.enter)
        })
    }
})