(function(){

	angular.module("bienestarysalud.controllers")
		.controller("RestauranteController", 
				["$scope", "DatosAbiertosService", "ngDialog", 
				function ($scope, datosAbiertosService, ngDialog){
			$scope.$root.classContainer = "box-container-red"
			$scope.$parent.TituloHeader = "Restaurantes";
			$scope.resultDataRestaurante = [];

			datosAbiertosService.getRestauranteResult()
			.then(function(data){
				$scope.resultDataRestaurante = data;
			});

			// console.log("");

			$scope.openNotify = function (valor) {

               var dialog = ngDialog.open({
                    template:
                        '<p>Address:</p><p>' + valor[7] + '</p>' +
                        '<br/>'+
                        '<div id="map_canvas" style="width:400px; height:300px;"></div>' +
                        '<div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="closeThisDialog(1)">Close</button></div>',
                    plain: true
                });
                dialog.closePromise.then(function (data) {
                    console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
                });


            };			
		}]);

})()