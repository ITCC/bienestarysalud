(function() {

	angular.module('bienestarysalud.factories', [])
	.factory('DatosAbiertosFactory', ['$http', '$q', function($http, $q){
	    return {
	    	getDiscapacitadosResult: function(filters) {
	            var deferred = $q.defer();
	            $http.get('data/discapacitados.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}})
	            .success(function(data, status, headers, config) {
	                deferred.resolve(data);
	            })
	            .error(function(data, status, headers, config) {
	                deferred.reject("error: " + status);
	            });

	            return deferred.promise;
	        },
	        getActividadesResult: function(filters) {
	            var deferred = $q.defer();
	            $http.get('data/actividades.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}})
	            .success(function(data, status, headers, config) {
	                deferred.resolve(data);
	            })
	            .error(function(data, status, headers, config) {
	                deferred.reject("error: " + status);
	            });

	            return deferred.promise;
	        },
	        getSaludResult: function(filters) {
	            var deferred = $q.defer();
	            $http.get('data/salud.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}})
	            .success(function(data, status, headers, config) {
	                deferred.resolve(data);
	            })
	            .error(function(data, status, headers, config) {
	                deferred.reject("error: " + status);
	            });

	            return deferred.promise;
	        },
	        getVeterinariaResult: function(filters) {
	            var deferred = $q.defer();
	            $http.get('data/veterinaria.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}})
	            .success(function(data, status, headers, config) {
	                deferred.resolve(data);
	            })
	            .error(function(data, status, headers, config) {
	                deferred.reject("error: " + status);
	            });

	            return deferred.promise;
	        },
	        getTallerResult: function(filters) {
	            var deferred = $q.defer();
	            $http.get('data/talleres.json',{header : {'Content-Type' : 'application/json; charset=UTF-8'}})
	            .success(function(data, status, headers, config) {
	                deferred.resolve(data);
	            })
	            .error(function(data, status, headers, config) {
	                deferred.reject("error: " + status);
	            });

	            return deferred.promise;
	        }
	    };
	}]);


})()