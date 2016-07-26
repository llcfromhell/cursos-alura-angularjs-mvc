angular.module('minhasDiretivas', []).directive('meuPainel', function(){
    
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