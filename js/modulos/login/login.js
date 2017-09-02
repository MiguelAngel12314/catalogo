(function() {
	"use strict";
	angular.module("catalogo.login")
	.controller('login',login);

	login.$inject=['$location'];	
	function login($location) {				
		var vm = this;

		vm.login = login;

		function login() {
			$location.path("principal");
		}
	}
})();