angular.module('adamdebono')
	.directive('navigation', ['$location', function($location) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/navigation.html',
			controller: function($scope) {
				$scope.navItems = [
					{
						title: 'Home',
						href: '#/'
					},{
						title: 'Projects',
						href: '#/projects'
					},{
						title: 'Open Source',
						href: '#/open-source'
					}
				];

				$scope.path = $location.path();
				$scope.$on('$locationChangeSuccess', function() {
					$scope.path = $location.path();
				});
			}
		};
	}])
	.directive('social', [function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/social.html',
			controller: function($scope) {
				$scope.items = [
					{
						title: 'Twitter',
						account: '@adamdebono',
						icon: 'fa-twitter-square',
						href: 'http://twitter.com/adamdebono'
					},{
						title: 'GitHub',
						account: 'adamdebono',
						icon: 'fa-github-square',
						href: 'http://github.com/adamdebono'
					},{
						title: 'LinkedIn',
						account: 'adamdebono',
						icon: 'fa-linkedin-square',
						href: 'http://www.linkedin.com/in/adamdebono'
					},{
						title: 'eMail',
						account: 'adam@adebono.com',
						icon: 'fa-envelope-square',
						href: 'mailto:adam@adebono.com'
					}
				]
			}
		};
	}])
	.directive('contentBox', [function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/content-box.html',
			transclude: true
		};
	}]);
