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

    .directive('linkViewMapr', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/partials/link_ver_mapa_partial.html',
        controller: function($scope, ngDialog) {
            $scope.openNotify = function (data) {
                $scope.TituloModal = data[1];
                $scope.Direccion = data[7];
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

    var starApp = angular.module('bienestarysalud.directives');
    starApp.controller('StarCtrl', ['$scope', function ($scope) {
        $scope.rating = 0;
        $scope.ratings = [{
            current: 3,
            max: 5
        }];

        $scope.getSelectedRating = function (rating) {
            console.log(rating);
        }
        
        $scope.setMinrate= function(){
           $scope.ratings = [{
            current: 1,
            max: 10
        }, {
            current: 1,
            max: 5
        }];
        }
        
        $scope.setMaxrate= function(){
           $scope.ratings = [{
            current: 10,
            max: 10
        }, {
            current: 5,
            max: 5
        }];
      }
      
      $scope.sendRate = function(rating){
      }
    }]);

    starApp.directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function (scope, elem, attrs) {

                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };

                scope.toggle = function (index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating: index + 1
                    });
                };

                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        }
    });

})();
