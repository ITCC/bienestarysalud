(function(){

	angular.module("bienestarysalud.controllers")
		.controller("CampanaController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			
		}]);

})()