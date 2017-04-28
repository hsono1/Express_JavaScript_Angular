
var app = angular.module("myApp", []);

// function language(name){

// 	this.name = name;
// 	this.likes = 0;
// 	this.dislikes = 0;
//     this.addLike = function(){

//     	this.likes++;

//     };
// };


class Language
{
	constructor(name){
	this.name = name;
	this.likes = 0;
	this.dislikes = 0;
	}
	addLike() {

    	this.likes++;

    };
	addDisLike() {

    	this.dislikes++;

    };



}; 





app.controller('myController', function($scope){






		var angular = new Language("Angular");
		$scope.angular = angular;
		var python = new Language("Python");
		$scope.python = python;
		var javaScript = new Language("JavaScript");
		$scope.javaScript = javaScript;










});







