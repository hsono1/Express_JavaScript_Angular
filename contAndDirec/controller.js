

var app = angular.module('myApp', []);


app.controller('myController', function($scope){

	var foodList =  ["Apple", "Pear", "Rice"];

	$scope.foodList = foodList;


	$scope.addFood = function(item){

		foodList.push(item);
		$scope.foodName = "";


	}







});