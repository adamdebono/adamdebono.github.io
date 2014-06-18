angular.module('adamdebono')
	.constant('adPages', [
		{
			title: 'Home',
			id: 'home',
			path: '',
			controller: 'HomeCtrl'
		},{
			title: 'Projects',
			id: 'projects',
			path: 'projects',
			controller: 'ProjectsCtrl',
			
			subPages: [
				{
					title: 'UOW Map Mate',
					id: 'map-mate',
					path: 'map-mate',
					controller: 'MapMateCtrl'
				},{
					title: 'Developer Color Helper',
					id: 'color-helper',
					path: 'color-helper',
					controller: 'ColorHelperCtrl'
				}
			]
		},{
			title: 'Open Source',
			id: 'open-source',
			path: 'open-source',
			controller: 'OpenSourceCtrl'
		}
	])
	
/********** Controllers **********/
	
//	Home
	.controller('HomeCtrl', ['$scope', function ($scope) {

	}])
	
//	Projects
	.controller('ProjectsCtrl', ['$scope', 'adPages', function($scope, adPages) {
		angular.forEach(adPages, function(page) {
			if (page.id == 'projects') {
				$scope.projectPage = page;
				$scope.projects = page.subPages;
			}
		});
	}])
	.controller('MapMateCtrl', ['$scope', function($scope) {
		
	}])
	.controller('ColorHelperCtrl', ['$scope', function($scope) {
		
	}])

//	Open Source
	.controller('OpenSourceCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.repos = [];
		
		$http({
			method: 'GET',
//			url: 'https://api.github.com/users/adamdebono/repos',
//			params: {
//				type: 'owner',
//				sort: 'pushed',
//				direction: 'desc'
//			}
			url: 'https://api.github.com/search/repositories',
			params: {
				q: 'user:adamdebono',
				sort: 'updated'
			}
		}).success(function(data, status, headers, config) {
			$scope.repos = data.items;
		}).error(function(data, status, headers, config) {
			console.log('errors');
		});
	}]);