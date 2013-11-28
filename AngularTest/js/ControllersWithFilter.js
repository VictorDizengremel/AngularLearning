/**
 * Created by dizen_000 on 28/11/13.
 */
var myApp =angular.module("myApp",[]);
myApp.factory('Data', function(){
    return {message: "I'm data from a service"};
})

myApp.filter('reverse', function(){
    return function(test){
        return test.split("").reverse().join("");
    }
})

function FirstCtrl($scope, Data){
    $scope.data=Data;
}

function SecondCtrl($scope, Data){
    $scope.data=Data;
    $scope.reversedMessage = function(message){

        //return message.split("").reverse().join("");
    }
}