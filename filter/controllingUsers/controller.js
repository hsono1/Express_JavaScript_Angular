var app = angular.module('myApp', []);

app.controller('myController', ['$scope',function($scope){


	$scope.users = [

		{ fName: "Yukihiro", lName: "Matsumoto", language : "Ruby"  }, 
		{ fName: "Hans", lName: "Sono", language : "JavaScript"  }, 



	];


	$scope.deleteUser = function(item){

		if( $scope.users.indexOf(item)  != -1 )
		{
			$scope.users.splice(  $scope.users.indexOf(item), 1 );
		}


	};



	$scope.createUser = function(item)
	{
		$scope.users.push(  {   fName : $scope.fName, lName: $scope.lName, language : $scope.language  });
		$scope.fName = "";
		$scope.lName = "";
		$scope.language = "";


	}






}]);