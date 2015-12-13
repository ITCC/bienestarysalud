(function(){

	angular.module("bienestarysalud.controllers")
		.controller("CampanaController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Campaña";
			$scope.resultDataSalud = [];
			$scope.resultDataVeterinaria = [];

			datosAbiertosService.getSaludResult()
			.then(function(data){
				console.log(data);
				$scope.resultDataSalud = data;
			});
			
			datosAbiertosService.getVeterinariaResult()
			.then(function(data){
				console.log(data);
				$scope.resultDataVeterinaria = data;
			});			
		}]);

})()