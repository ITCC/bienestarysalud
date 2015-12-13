(function(){

	angular.module("bienestarysalud.controllers")
		.controller("TallerController", ["$scope", "DatosAbiertosService", "ngDialog", function ($scope, datosAbiertosService,ngDialog){
			$scope.$root.classContainer = "box-container-blue"
			$scope.$parent.TituloHeader = "Talleres";
			$scope.resultDataTalleres = [];
			
			datosAbiertosService.getTallerResult()
			.then(function(data){
				$scope.resultDataTalleres = data;
			});
			
			$scope.openNotify = function () {
               var dialog = ngDialog.open({
                    template:
					   '<div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">HTML Comment Box</a> is loading comments...</div>' +
					   '<link rel="stylesheet" type="text/css" href="//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />' +
					   '<script type="text/javascript" id="hcb"> if (!window.hcb_user) { hcb_user = {}; } (function () { var s = document.createElement("script"), l = hcb_user.PAGE || ("" + window.location), h = "//www.htmlcommentbox.com"; s.setAttribute("type", "text/javascript"); s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&mod=%241%24wq1rdBcg%24yZJYCdRVDCCmBW2CAdoig1" + "&opts=16862&num=10&ts=1448247820352"); if (typeof s != "undefined") document.getElementsByTagName("head")[0].appendChild(s); })(); </script>',
						plain: true
                });
                dialog.closePromise.then(function (data) {
                    console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
                });
            };	
		}])
})()
