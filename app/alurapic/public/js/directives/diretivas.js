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
            
            template : '<button ng-click="acao()" class="btn btn-danger btn-block">Remover</button>',
            restrict : 'E',
            scope : {
                acao : '&'
            }
            
        };
        
        return ddo;
        
    })
    .directive('focaAposCadastroDaFoto', function(){
        
        var ddo = {
            
            restrict : 'A',
            scope : {
                focado: '='
            },
            // link é a fase que o scope fica disponível
            link : function(scope, element){
            
                // $on é para pegar o broadcast feito lá no serviço
                scope.$on('fotoCadastrada', function() {
                    
                    // elemente é devido a api Sizzle que também é seguida pelo jQuery
                    element[0].focus();
                })
            }
        }
        
        //fazendo com watch
        /*
        ddo.link = function(scope, element) {
        // quero observar qualquer mudança em `focado`!
            scope.$watch('focado', function(novoValor, valorAntigo) {
            alert('mudei');
            });
        };
        */
        
        return ddo;
        
    }).directive('meusTitulos', function() {
        var ddo = {};
        
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        
        ddo.controller = function($scope, fotosResource) {
            fotosResource.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });    
            });
        };
        
        return ddo;
    });