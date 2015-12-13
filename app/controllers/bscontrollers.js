(function(){

	angular.module("bienestarysalud.controllers", [])
		.controller("BienestarySaludController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			//console.log($routeParams);
			console.log($scope)
			$scope.$parent.TituloHeader = "Bienestar Y Salud";
			$scope.headerData = ["N°","JORNADA / CAMPAÑA","MES","FECHA","HORA","LUGAR","DIRECCION","SERVICIOS A BRINDAR","SEC"];
			$scope.resultData = [["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"]];
			//$scope.resultData = [];
			/*if ($routeParams.type != undefined)
			{
				$scope.restulData = datosAbiertosService.getResult();
			}*/

			/*$scope.saveContacto = function() {
				$scope.contacts.push($scope.currentContacto);
				document.location = "#contactos";
				//console.log(JSON.stringify($scope.currentContacto));
			};

			$scope.eliminarContacto = function(index) {
				$scope.contacts.splice(index,1);
			}*/
		}])
		.controller("ActividadController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataSalud = [["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"],["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"]];
			
			/*if ($routeParams.type != undefined)
			{
				$scope.restulData = datosAbiertosService.getResult();
			}*/

			/*$scope.saveContacto = function() {
				$scope.contacts.push($scope.currentContacto);
				document.location = "#contactos";
				//console.log(JSON.stringify($scope.currentContacto));
			};

			$scope.eliminarContacto = function(index) {
				$scope.contacts.splice(index,1);
			}*/
		}]);

})()