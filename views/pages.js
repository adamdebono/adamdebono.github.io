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
			
			controller: 'ProjectsCtrl'
		}//,{
//			title: 'Open Source',
//			href: '#/open-source',
//			controller: 'Opn'
//		}
	])
	.controller('HomeCtrl', ['$scope', function ($scope) {

	}])
	.controller('ProjectsCtrl', ['$scope', function($scope) {

	}]);
