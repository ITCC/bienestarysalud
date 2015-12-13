(function(){

	angular.module("bienestarysalud.controllers")
		.controller("ActividadController", ["$scope", "DatosAbiertosService", "appConstant", function ($scope, datosAbiertosService, appConstant){
			var date = new Date();
			$scope.$root.classContainer = "box-container-green"
			$scope.$parent.TituloHeader = "Actividades";
			$scope.filterMonth = appConstant.Meses[date.getMonth()];
			$scope.filterMonth2 = appConstant.Meses[date.getMonth()];
			console.log($scope.filterMonth)
			$scope.resultDataActividades = [];
			$scope.resultDataDiscapacitados = [];

			datosAbiertosService.getActividadesResult($scope.filterMonth)
			.then(function(data){
				$scope.resultDataActividades = data;
			});
			
			datosAbiertosService.getDiscapacitadosResult()
			.then(function(data){
				console.log(data)
				$scope.resultDataDiscapacitados = data;
			});
		}]);

})()