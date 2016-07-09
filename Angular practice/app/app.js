var app = angular.module("app", [])
				.controller('formController', function($scope, user, $http){
					user.name = "John Duckett";
					user.email = "john@duckett.com";
					user.password = "";

					$scope.user = user;

					$http.get("data.json")
					.then (function(response) {
						$scope.data = response.data;
						$scope.users = response.data.users;
						$scope.names = response.data.users[0].name;
					});
				})
				.value('user', {
					name: "",
					email: "",
					password: ""
				});