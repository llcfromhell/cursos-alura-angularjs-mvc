angular.module('alurapic', ['minhasDiretivas', 'FotosController', 'FotoController', 'GruposController', 'ngAnimate', 'ngRoute'])
    
    .config(function($routeProvider, $locationProvider){
        
        $locationProvider.html5Mode(true);
        
        // rotas
        $routeProvider
        
        .when("/fotos/", {
            
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
            
        })
        
        .when("/fotos/new", {
            
            templateUrl: 'partials/foto.html',
            controller : 'FotoController'
            
        })
        
        .when("/fotos/edit/:fotoId", {
            
            templateUrl: 'partials/foto.html',
            controller : 'FotoController'
            
        })
        
        .otherwise({redirectTo: '/fotos'});
        
    });