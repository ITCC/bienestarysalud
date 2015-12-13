(function(){

	angular.module("bienestarysalud.controllers")
		.controller("TallerController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$root.classContainer = "box-container-blue"
			$scope.$parent.TituloHeader = "Tallares";
			$scope.resultDataTalleres = [];
			
			datosAbiertosService.getTallerResult()
			.then(function(data){
				$scope.resultDataTalleres = data;
			});
		}])
})()