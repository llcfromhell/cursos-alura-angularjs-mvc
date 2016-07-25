angular.module('alurapic', []).controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	
	$http.get('v1/fotos')
		.then(function(result){
			$scope.fotos = result.data;
		})
		.catch(function(error){
			console.log(error);
		});

});