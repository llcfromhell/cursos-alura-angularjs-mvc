angular.module('alurapic', ['minhasDiretivas', 'FotosController', 'ngAnimate', 'ngRoute'])
    
    .config(function($routeProvider, $locationProvider){
        
        $locationProvider.html5Mode(true);
        
        // rotas
        $routeProvider
        
        .when("/fotos/", {
            
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
            
        })
        
        .when("/fotos/new", {
            
            templateUrl: 'partials/foto.html'
            
        })
        
        .otherwise({redirectTo: '/fotos'});
    });