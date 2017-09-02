(function() {
	"use strict";

	angular.module("catalogo")
		   .config(config);

	config.$inject=['$routeProvider'];

	function config($routeProvider) {
		$routeProvider.
		when('/principal',{
			templateUrl: "js/modulos/principal/principal.html",
			controller: "principal",
			controllerAs: "vm"
		})
		.when("/login",{
			templateUrl:"js/modulos/login/login.html",
			controller:"login",
			controllerAs:"vm"
		})
		.when("/registro",{
			templateUrl:"registro",
			controller:"registro",
			controllerAs:"vm"
		})
		.otherwise({redirectTo:"/login"});
	}
})();