angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, fotosResource, cadastroFoto){

    $scope.foto = {};
    $scope.mensagem = "";

    var fotoId = $routeParams.fotoId;

    if (fotoId) {

        fotosResource.get({fotoId : fotoId},
        
            function(foto){

                $scope.foto = foto;

            }, function(erro){

                console.log(erro);

            });
            
    }

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {
    
            cadastroFoto.cadastrar($scope.foto)
                .then(function(resposta){
                    $scope.mensagem = resposta.mensagem;
                })
                .catch(function(resposta){
                    $scope.mensagem = resposta.mensagem;
                });
            
            /*
            if (fotoId) {
             
                fotosResource.update({fotoId : $scope.foto._id}, $scope.foto, 
                    
                    function() {
                        
                        $scope.mensagem = 'Foto alterada com sucesso';
                    
                    }, function(erro) {
                        
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
            */
            
        }
    }
    
    

})