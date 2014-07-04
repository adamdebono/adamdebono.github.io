angular.module('adamdebono')
	.constant('adPages', [
		{
			title: 'Home',
			id: 'home',
			path: '',
			controller: 'PlainCtrl'
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
					controller: 'PlainCtrl'
				},{
					title: 'Developer Color Helper',
					id: 'color-helper',
					path: 'color-helper',
					controller: 'ColorHelperCtrl'
				}/*,{
					title: 'Angular Blog',
					id: 'angular-blog',
					path: 'angular-blog',
					controller: 'PlainCtrl'
				}*/
			]
		},{
			title: 'Open Source',
			id: 'open-source',
			path: 'open-source',
			controller: 'OpenSourceCtrl'
		}
	])
	
/********** Controllers **********/

	.controller('PlainCtrl', [function(){}])

//	Home
	
//	Projects
	.controller('ProjectsCtrl', ['$scope', 'adPages', function($scope, adPages) {
		angular.forEach(adPages, function(page) {
			if (page.id == 'projects') {
				$scope.projectPage = page;
				$scope.projects = page.subPages;
			}
		});
	}])
	.controller('ColorHelperCtrl', ['$scope', function($scope) {
		$scope.screenshots = [
			'1',
			'2',
			'3',
			'4'
		]
	}])

//	Open Source
	.controller('OpenSourceCtrl', ['$scope', 'adGithubApi', function($scope, adGithubApi) {
		$scope.repos = undefined;
		$scope.loading = true;
		$scope.error = undefined;

		$scope.loadRepos = function() {
			$scope.repos = undefined;
			$scope.loading = true;
			$scope.error = undefined;

			adGithubApi.getRepos().then(function(repos) {
				//success
				$scope.loading = false;
				$scope.repos = repos;
			}, function(reason) {
				//failure
				$scope.loading = false;
				$scope.error = reason;
			});
		};

		$scope.loadRepos();
	}]);