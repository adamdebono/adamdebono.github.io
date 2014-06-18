angular.module('adamdebono')
	.directive('navigation', ['$location', function($location) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/navigation.html',
			controller: function($scope, $element) {
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
		}
	}]);
