(function(){

	angular.module("bienestarysalud.controllers")
		.controller("RestauranteController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			
		}]);

})()