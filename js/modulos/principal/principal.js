(function() {
	"use strict";

	angular.module("catalogo.principal")
		   .controller("principal",principal);

	principal.$inject = ['$timeout'];

	function principal($timeout) {
		var vm = this;		
		vm.catalogo = [{
			img:"https://n1.sdlcdn.com/imgs/b/s/6/SDL246440630_2-f7bf3.jpg",
			titulo:"Botella Godin",
			precio:"64.00"
		},
		{
			img:"http://diariodeavisos.elespanol.com/wp-content/uploads/2017/07/10124512000.jpg",
			titulo:"Tupper Godin",
			precio:"70.00"
		},
		{
			img:"http://negociosrecomendadosklob.com/wp-content/uploads/2015/05/tupper1-1431539909.jpg",
			titulo:"Kit Godin",
			precio:"230.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		},
		{
			img:"https://www.tupperware.com.mx/service/appng/tupperware-products/webservice/images/042312_1200x845.jpg",
			titulo:"Mamila para Mama luchona",
			precio:"85.00"
		}];

		var swiper = new Swiper('.swiper-container', {
		        pagination: false,
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 30,
		        freeMode: true
		    });

		    var swiper1 = new Swiper('.swiper-container1', {
		        scrollbar: '.swiper-scrollbar',
		        direction: 'vertical',
		        slidesPerView: 'auto',
		        mousewheelControl: true,
		        freeMode: true
		    });

		vm.mostrarModal = false;

		vm.detalle = detalle;

		function detalle() {
			swiper.appendSlide(2);
			 mui.overlay('on');
			 vm.mostrarModal = true;
			 appendSlide
		}			
	}
})();