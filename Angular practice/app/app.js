var app = angular.module('app', [])
				.controller('formController', function($scope, $filter){
					// user.name = "John Duckett";
					// user.email = "john@duckett.com";
					// user.password = "";

					// $scope.user = user;

					// $http.get("data.json")
					// .then (function(response) {
					// 	$scope.data = response.data;
					// 	$scope.users = response.data.users;
					// 	$scope.names = response.data.users[0].name;
					// });

					// $log.log("hello");
					// 	$log.info("This is some info");
					// 	$log.warn("Warning!");
					// 	$log.debug("Some debug info");
					// 	$log.error("This is an error");

					$scope.handle = "";
					$scope.lowercasehandle = function () {
						return $filter('lowercase')($scope.handle);
					};

					$scope.maxlength = 5;

					// $scope.$watch('handle', function(newValue, oldValue) {
					// 	console.info ("Value changed!");
					// 	console.log ("Old value : " + oldValue);
					// 	console.log ("New value : " + newValue);
					// });


				});

				// .value('user', {
				// 	name: "",
				// 	email: "",
				// 	password: ""
				// });


