(function(){

	angular.module("bienestarysalud.controllers")
		.controller("ActividadController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$root.classContainer = "box-container-green"
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataActividades = [];
			$scope.resultDataDiscapacitados = [];

			datosAbiertosService.getActividadesResult()
			.then(function(data){
				$scope.resultDataActividades = data;
			});
			
			datosAbiertosService.getDiscapacitadosResult()
			.then(function(data){
				$scope.resultDataDiscapacitados = data;
			});
		}]);

})()