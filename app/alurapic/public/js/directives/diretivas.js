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