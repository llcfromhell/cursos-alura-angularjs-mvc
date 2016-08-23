angular.module('minhasDiretivas', [])

    // meu painel
    .directive('meuPainel', function(){
    
        var ddo = {
            
            transclude : true,
            templateUrl : 'js/directives/meu-painel.html',
            restrict : 'AE',
            scope : {
                titulo : '@',
            }
            
        };
        
        return ddo;
        
    })
    
    // minha foto
    .directive('minhaFoto', function(){
    
        var ddo = {
            
            transclude : true,
            templateUrl : 'js/directives/minha-foto.html',
            restrict : 'E',
            scope : {
                url : '@',
                titulo : '@',
            }
            
        };
        
        return ddo;
        
    })
    
    .directive('remover', function(){
    
        var ddo = {
            
            transclude : true,
            template : '<button ng-click="acao()" class="btn btn-danger btn-block">Remover</button>',
            restrict : 'E',
            scope : {
                acao : '&'
            }
            
        };
        
        return ddo;
        
    })