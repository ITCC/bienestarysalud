(function() {

	angular.module('bienestarysalud.services', [])
	.service('DatosAbiertosService', ['$q','DatosAbiertosFactory', function($q, datosAbiertosFactory) {
		this.getDiscapacitadosResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getDiscapacitadosResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}

		this.getActividadesResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getActividadesResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}

		this.getSaludResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getSaludResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}

		this.getVeterinariaResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getVeterinariaResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}

		this.getTallerResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getTallerResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}
		
		this.getRestauranteResult = function() {
			var deferred = $q.defer();
            datosAbiertosFactory.getRestauranteResult("")
            .then(function(data) {
                deferred.resolve(data);
            })

            return deferred.promise;
		}
	    /*var cartId = new Object();
	    this.getCartId = function(){
	        return cartId;
	    };
	    this.cartId = function(value){
	        cartId = value;
	    };
	    this.getCart = function(){
	      return CompanyFactory.getCart(this.getCartId()).then(function(data){return data});
	    };*/
	}]);


})()