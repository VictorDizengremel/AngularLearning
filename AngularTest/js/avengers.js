/**
 * Created by dizen_000 on 28/11/13.
 */
var myApp =angular.module("myApp",[]);

myApp.directive('superman',function(){
    return{
        restrict:'E',
        template:"<div>Ma balise superman affiche ca !!!</div>"
    }
})

myApp.factory('Avengers',function(){
    var Avengers={};
    Avengers.cast=[
    {
        name: "Samuel L Jackson",
        character: "Nick Fury"
    },
    {
        name: "Chris Evans",
            character: "Captain America"
    },
    {
        name: "Tom Hiddleston",
            character: "Loki"
    },
    {
        name: "Chris Hemsworth",
            character: "Thor"
    }
    ];

    return Avengers;
})

function AvengersCtrl($scope, Avengers){
    $scope.avengers = Avengers;
}
