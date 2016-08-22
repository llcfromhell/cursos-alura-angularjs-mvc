angular.module('FotoController', []).controller('FotoController', function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.mensagem = "";

    var fotoId = $routeParams.fotoId;

    if (fotoId) {

        $http.get("v1/fotos/" + fotoId)

            .success(function(foto){
                
                $scope.foto = foto;

            }).error(function(erro){

                console.log(erro);

            })
            
    }

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {
        
            if (fotoId) {
             
                $http.put("v1/fotos/" + fotoId, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto alterada com sucesso';

                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar';
                    });
                    
            } else {
        
                $http.post("v1/fotos", $scope.foto)
                
                    .success(function() {
                
                        $scope.mensagem = "Dados salvos com sucesso!";
                        alert($scope.mensagem);
                        
                        // atribui objeto vazio para limpar o formulário
                        $scope.foto = {};
                    
                        // reseta status do formulário para "novo"
                        $scope.formulario.$setPristine();
                    
                    }).error(function(erro) {
                        
                        console.log(erro);
                        $scope.mensagem = "Ocorreu um erro!";
                        
                    });
                    
            }
            
        }
    }
    
    

})