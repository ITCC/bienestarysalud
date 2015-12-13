(function(){

	angular.module("bienestarysalud.controllers")
		.controller("TallerController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			
		}]);

})()