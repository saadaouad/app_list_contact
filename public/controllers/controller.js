angular.module('myApp', [])
.controller('myController', function($scope, $http){

	$http.get("/contactList").success(function(response){

		console.log("I got the data I requested");

		$scope.contactList = response;

	});
})