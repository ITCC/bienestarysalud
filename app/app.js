(function(){
	'use strict';
	angular.module("bienestarysalud", ["ui.router", "bienestarysalud.controllers", "bienestarysalud.services", "bienestarysalud.factories", "bienestarysalud.directives", "bienestarysalud.filters"])
		.constant("appConstant", {
			"Meses": ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SETIEMPRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
		})
	 	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){
	 		$urlRouterProvider.otherwise("/home");

	 		$stateProvider
			    .state('home', {
			      url: "/home",
			      templateUrl: "./app/partials/home_partial.html",
			      controller: function($scope) {
			      	$scope.$root.classContainer = "box-container-white"
			      }
			    })
			    .state('info', {
			      url: "/info",
			      templateUrl: "./app/partials/info_partial.html"
			    })
			    .state('info.actividades', {
			      url: "/actividades",
			      templateUrl: "./app/partials/actividad_partial.html",
			      controller: "ActividadController"
			    })
			    .state('info.campanas', {
			      url: "/campanas",
			      templateUrl: "./app/partials/campana_partial.html",
			      controller: "CampanaController"
			    })
			    .state('info.talleres', {
			      url: "/talleres",
			      templateUrl: "./app/partials/taller_partial.html",
			      controller: "TallerController"
			    })
			    .state('info.restaurantes', {
			      url: "/restaurantes",
			      templateUrl: "./app/partials/restaurante_partial.html",
			      controller: "RestauranteController"
			    })
	 	}]);
/*
	angular.module("bienestarysalud", ["ngRoute", "bienestarysalud.controllers", "bienestarysalud.services", "bienestarysalud.factories"])
	 	.config(["$routeProvider", "$locationProvider", "$httpProvider", function ($routeProvider, $locationProvider, $httpProvider){
	 		$routeProvider
	 			.when("/home", {
	 				templateUrl: "./app/partials/home_partial.html",
		 			controller: "BienestarySaludController"
	 			})
	 			.when("/actividades", {
		 			templateUrl: "./app/partials/actividad_partial.html",
		 			controller: "BienestarySaludController"
		 		})
		 		.when("/campanas", {
		 			templateUrl: "./app/partials/campanas_partial.html",
		 			controller: "BienestarySaludController"
		 		})
		 		.when("/talleres", {
		 			templateUrl: "./app/partials/talleres_partial.html",
		 			controller: "BienestarySaludController"
		 		})
		 		.when("/restaurantes", {
		 			templateUrl: "./app/partials/restaurantes_partial.html",
		 			controller: "BienestarySaludController"
		 		})
		 		.when("/result/map/:type/:direccion/:lugar", {
		 			templateUrl: "./app/partials/map_partial.html",
		 			controller: "BienestarySaludController"
		 		})
		 		.otherwise({
					redirectTo: '/home'
				});

				//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	 	}]);*/

})()