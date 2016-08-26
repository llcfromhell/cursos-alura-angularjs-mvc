angular.module('alurapic').controller('FotosController', function($scope, $http, fotosResource) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	
	fotosResource.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {

		fotosResource.delete({
			fotoId: foto._id
		}, function() {
			$scope.fotos.splice($scope.fotos.indexOf(foto), 1);
			$scope.mensagem = "Imagem: " + foto.titulo + " removida com sucesso!";
		}, function(erro) {
			console.log()

		});

	}

})