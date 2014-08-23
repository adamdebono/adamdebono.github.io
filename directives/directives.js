angular.module('adamdebono')
	.directive('navigation', ['$location', 'adPages', function($location, adPages) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/navigation.html',
			controller: function($scope) {
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
						account: 'me@adamdebono.com',
						icon: 'fa-envelope-square',
						href: 'mailto:me@adamdebono.com'
					}
				];
			}
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
			controller: function($scope) {
				$scope.$watch('style', function() {
					console.log($scope.style);
					if ($scope.style && $scope.style.length) {
						$scope.boxStyle = 'content-box-'+$scope.style;
					} else {
						$scope.boxStyle = '';
					}
				});
			}
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
