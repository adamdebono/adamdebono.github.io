

angular.module('adamdebono', ['ngRoute', 'angulartics', 'angulartics.google.analytics'])
	.constant('adGithub', {
		apiUrl: 'https://api.github.com',
		username: 'adamdebono'
	})


	.config(['$routeProvider', '$analyticsProvider', 'adPages', 'adPages404', function ($routeProvider, $analyticsProvider, adPages, adPages404) {
		var viewDirectory = 'assets/html/pages';
		var setupRoutes = function(pages, root) {
			angular.forEach(pages, function(page) {
				var url = root+page.path;
				var templateUrl = viewDirectory+root+page.id+'.html';
				$routeProvider.when(url, {
					controller: page.controller,
					templateUrl: templateUrl
				});
				
				if (page.subPages) {
					setupRoutes(page.subPages, url+'/');
				}
			});
		};
		
		var rootUrl = '/';
		setupRoutes(adPages, rootUrl);
		$routeProvider.when(rootUrl, {
			redirectTo: '/about'
		});
		
		$routeProvider.otherwise({
			controller: adPages404.controller,
			templateUrl: viewDirectory + rootUrl + adPages404.id + '.html'
		});
	}])


	.factory('adGithubApi', ['adGithub', '$http', '$q', '$timeout', function(adGithub, $http, $q, $timeout) {
		var repos = undefined;
		var status = undefined;

		return {
			getRepos: function() {
				var deferred = $q.defer();

				if (repos !== undefined) {
					$timeout(function() {
						deferred.resolve(repos);
					}, 0);
				} else {
					$http({
						method: 'GET',
						url: adGithub.apiUrl+'/search/repositories',
						params: {
							q: 'user:'+adGithub.username,
							sort: 'stars'
						}
					}).success(function(data, status, headers, config) {
						if (data.items !== undefined) {
							repos = data.items;
							deferred.resolve(repos);
						} else {
							deferred.reject('An error occurred loading the repos.');
						}
					}).error(function(data, status, headers, config) {
						deferred.reject('An error occurred loading the repos');
					});
				}

				return deferred.promise;
			}
		}
	}]);