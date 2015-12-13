(function() {

	angular.module('bienestarysalud.services', [])
	.service('DatosAbiertosService', ['DatosAbiertosFactory', function(datosAbiertosFactory) {
		this.getResult = function() {
			return datosAbiertosFactory.getResult("");
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