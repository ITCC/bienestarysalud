(function(){

	angular.module("bienestarysalud.controllers")
		.controller("CampanaController", ["$scope", "DatosAbiertosService", "ngDialog", function ($scope, datosAbiertosService, ngDialog){
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

			/*$scope.openNotify = function () {
               var dialog = ngDialog.open({
                    template:
                        '<p>You can do whatever you want when I close, however that happens.</p>' +
                        '<div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
                    plain: true
                });
                dialog.closePromise.then(function (data) {
                    console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
                });
            };*/			
		}]);

})()