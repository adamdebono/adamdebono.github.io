angular.module('adamdebono')
	.directive('navigation', ['$location', 'adPages', function($location, adPages) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'assets/html/directives/navigation.html',
			controller: ['$scope', function($scope) {
				var setupNav = function(pages, root) {
					var items = [];
					angular.forEach(pages, function(page) {
						items.push({
							title: page.title,
							href: '#'+root+page.path
						});
					});
					return items;
				};
				$scope.navItems = setupNav(adPages, '/');
				
				$scope.path = $location.path();
				$scope.$on('$locationChangeSuccess', function() {
					$scope.path = $location.path();
				});
			}]
		};
	}])

	.directive('contentBox', [function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div class="content-box {{boxStyle}}" ng-transclude></div>',
			transclude: true,
			scope: {
				style: '@boxStyle'
			},
			controller: ['$scope', function($scope) {
				$scope.$watch('style', function() {
					if ($scope.style && $scope.style.length) {
						$scope.boxStyle = 'content-box-'+$scope.style;
					} else {
						$scope.boxStyle = '';
					}
				});
			}]
		};
	}])
	.directive('contentSection', [function() {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<div class="content-section">' +
				'<img ng-src="{{imgSrc}}"/>' +
				'<h3>{{title}}</h3>' +
				'<div ng-transclude></div>' +
			'</div>',
			scope: {
				title: '@',
				imgSrc: '@'
			}
		}
	}])

	.directive('activityIndicator', [function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<i class="fa fa-refresh fa-spin fa-4x"></i>',
			scope: {

			}
		}
	}]);
