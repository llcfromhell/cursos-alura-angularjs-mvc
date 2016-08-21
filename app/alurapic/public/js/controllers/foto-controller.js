angular.module('FotoController', []).controller('FotoController', function($scope, $http){

    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {
        
        
            $http.post("v1/fotos", $scope.foto)
                .success(function(){
            
                    $scope.mensagem = "Dados salvos com sucesso!";
                    alert($scope.mensagem);
                    
                    // atribui objeto vazio para limpar o formulário
                    $scope.foto = {};
                
                    // reseta status do formulário para "novo"
                    $scope.formulario.$setPristine();
                
                }).error(function() {
                    
                    $scope.mensagem = "Ocorreu um erro!";
                    alert($scope.mensagem);
                    
                });
            
        }
    };

})