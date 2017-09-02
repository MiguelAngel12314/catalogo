(function() {
	angular.module("catalogo.login")
	.service("loginService",loginService);

	loginService.$inject=[];

	function loginService() {
		return "hola";
	}
})();