(function() {

	angular.module('bienestarysalud.factories', [])
	.factory('DatosAbiertosFactory', ['$http', function($http){
	    return {
	        getResult: function(filters) {
	            var promise = $http.get('http://api.datosabiertos.msi.gob.pe/datastreams/invoke/JORNA-Y-CAMPA-SALUD?auth_key=c0a3345c3d03181a997d88cc62b8c1daba66a7d7&output=json_array&filter0=column2[==]FEBRERO')
	            .success(function(data, status, headers, config) {
	                return data.result;
	            })
	            .error(function(data, status, headers, config) {
	                return "error: " + status;
	            });
	        }
	    };
	}]);


})()