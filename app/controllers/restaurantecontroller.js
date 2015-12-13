(function(){

	angular.module("bienestarysalud.controllers")
		.controller("RestauranteController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$root.classContainer = "box-container-red"
			$scope.$parent.TituloHeader = "Restaurantes";
			$scope.resultDataRestaurante = [];

			datosAbiertosService.getRestauranteResult()
			.then(function(data){
				$scope.resultDataRestaurante = data;
			});			
		}]);

})()