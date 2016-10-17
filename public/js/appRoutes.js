angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
                .when('/logout', {			
			controller: 'LoginController'
		})
                .when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'LoginController'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'LoginController'	
		})
                .when('/auth/facebook', {			
			controller: 'LoginController'
		})
                .when('/auth/facebook/callback', {			
			controller: 'LoginController'
		});

	$locationProvider.html5Mode(true);

}]);