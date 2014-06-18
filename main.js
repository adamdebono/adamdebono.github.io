angular.module('adamdebono', ['ngRoute'])
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
	}]);