angular.module('FotosController', []).controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	
	$http.get('v1/fotos')
		.success(function(fotos){
			$scope.fotos = fotos;
		})
		.error(function(error){
			console.log(error);
		});
		
	$scope.remover = function(foto) {
        
        console.log(foto);
        
        $http.delete("v1/fotos/" + foto._id)
            .success(function(){
                $scope.fotos.splice($scope.fotos.indexOf(foto), 1);                
                $scope.mensagem = "Imagem: "+ foto.titulo +" removida com sucesso!";
            }).error(function(){
                $scope.mensagem = "Ocorreu um erro!";
                alert($scope.mensagem);
            });
        
    }

})