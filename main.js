angular.module('adamdebono', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeCtrl',
				templateUrl: 'views/home.html'
			})
			.when('/projects', {
				controller: 'ProjectsCtrl',
				templateUrl: 'views/projects.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	})
	.controller('HomeCtrl', ['$scope', function ($scope) {

	}])
	.controller('ProjectsCtrl', ['$scope', function($scope) {

	}]);