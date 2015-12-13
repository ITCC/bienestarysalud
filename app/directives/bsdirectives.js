(function () {

  angular.module('bienestarysalud.directives', ["ngDialog"])
    .directive('linkViewMap', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/partials/link_ver_mapa_partial.html',
        controller: function($scope, ngDialog) {
        	$scope.openNotify = function (data) {
        		$scope.TituloModal = data[1];
        		$scope.Direccion = data[6];
               	var dialog = ngDialog.open({
                    template: 'app/partials/map_partial.html',
                    scope: $scope
                });
                dialog.closePromise.then(function (data) {
                    console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
                });
            };	
        }
      };
    })


    

})();
