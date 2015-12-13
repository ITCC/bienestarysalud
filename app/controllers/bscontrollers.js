(function(){

	angular.module("bienestarysalud.controllers", ["ngDialog"])
		.constant("appConstant", {
			"Meses": ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SETIEMPRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
		})
		.controller("HomeController", ["$scope", "DatosAbiertosService", "appConstant", function ($scope, datosAbiertosService, appConstant){
			var date = new Date();
			$scope.$root.classContainer = "box-container-white"
			$scope.filterMonth = appConstant.Meses[date.getMonth()];
			$scope.totalActividades = 0;
			$scope.totalDiscapacitados = 0;
			$scope.totalSalud = 0;
			$scope.totalVeterinaria = 0;
			$scope.totalRestaurante = 0;
			$scope.totalTalleres  = 0;

			datosAbiertosService.getActividadesResult($scope.filterMonth)
			.then(function(data){
				var results = data.filter(function (actividad) {
		            return actividad[2] === $scope.filterMonth;
		         });
				$scope.totalActividades = results.length;
			});
			
			datosAbiertosService.getDiscapacitadosResult()
			.then(function(data){
				var results = data.filter(function (actividad) {
		            return actividad[6] === $scope.filterMonth;
		         });
				$scope.totalDiscapacitados = results.length;
			});

			datosAbiertosService.getSaludResult()
			.then(function(data){
				var results = data.filter(function (actividad) {
		            return actividad[2] === $scope.filterMonth;
		         });
				$scope.totalSalud = results.length;
			});
			
			datosAbiertosService.getVeterinariaResult()
			.then(function(data){
				var results = data.filter(function (actividad) {
		            return actividad[2] === $scope.filterMonth;
		         });
				$scope.totalVeterinaria = results.length;
			});	

			datosAbiertosService.getRestauranteResult()
			.then(function(data){
				$scope.totalRestaurante = data.length;
			});

			datosAbiertosService.getTallerResult()
			.then(function(data){
				$scope.totalTalleres = data.length;
			});


		}]);
		/*.controller("ActividadController", ["$scope", "DatosAbiertosService", function ($scope, datosAbiertosService){
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
			
		}]);*/

})()