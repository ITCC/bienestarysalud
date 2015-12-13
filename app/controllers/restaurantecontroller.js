(function(){

	angular.module("bienestarysalud.controllers")
		.controller("RestauranteController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Restaurantes Saludables";
			$scope.resultDataRestaurante = [];

			datosAbiertosService.getRestauranteResult()
			.then(function(data){
				console.log(data);
				$scope.resultDataRestaurante = data;
			});			
		}]);

})()