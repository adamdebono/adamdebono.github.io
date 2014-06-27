angular.module('adamdebono', ['ngRoute'])
	.constant('adGithub', {
		apiUrl: 'https://api.github.com',
		username: 'adamdebono'
	})

	.config(['$routeProvider', 'adPages', function ($routeProvider, adPages) {
		var viewDirectory = 'views';
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
		
		setupRoutes(adPages, '/');
		$routeProvider.otherwise({redirectTo: '/'});
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