(function(){

	angular.module("bienestarysalud.controllers")
		.controller("CampanaController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$root.classContainer = "box-container-orange"
			$scope.$parent.TituloHeader = "Campañas";
			$scope.resultDataSalud = [];
			$scope.resultDataVeterinaria = [];

			datosAbiertosService.getSaludResult()
			.then(function(data){
				$scope.resultDataSalud = data;
			});
			
			datosAbiertosService.getVeterinariaResult()
			.then(function(data){
				$scope.resultDataVeterinaria = data;
			});			
		}]);

})()