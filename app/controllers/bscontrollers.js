(function(){

	angular.module("bienestarysalud.controllers", [])
		.controller("ActividadController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataActividades = [];
			$scope.resultDataDiscapacitados = [];

			datosAbiertosService.getActividadesResult()
			.then(function(data){
				$scope.resultDataActividades = data;
			});
			
			datosAbiertosService.getDiscapacitadosResult()
			.then(function(data){
				$scope.resultDataDiscapacitados = data;
			});
		}])
		.controller("CampanaController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataSalud = [["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"],["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"]];

			
		}])
		.controller("TallerController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataSalud = [["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"],["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"]];
			
		}])
		.controller("RestauranteController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
			$scope.$parent.TituloHeader = "Actividades";
			$scope.resultDataSalud = [["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"],["2","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/7/15","8:30 AM - 1:00 PM","CASA ENCUENTRO VECINAL POLAR","CALLE JUAN MANUEL POLAR 105","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, Oftalmología, audiometría, podología, fisioterapia,","II"],["3","JORNADA INTEGRAL  GRATUITA DE SALUD","FEBRERO","2/28/15","8:30 AM - 1:00 PM","PARQUE ALFONSO UGARTE","AV.  JAVIER PRADO OESTE CUADRA 17","Control peso,talla, presión arterial,laboratorio Clínico, medicina, odontología, consejeria enfermería, nutrición,psicología, oftalmología, audiometría, podología, fisioterapia, Exposición Talleres  OMAPED","I"]];
			
		}]);

})()