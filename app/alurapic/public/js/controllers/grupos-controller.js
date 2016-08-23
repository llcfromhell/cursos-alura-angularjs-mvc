angular.module('GruposController', [] ).controller('GruposController', function($scope, $http) {
    
    //$scope.grupos = {};
    //alert('heyhey');
    $http.get('v1/grupos')
        .success(function(grupos){
            $scope.grupos = grupos;
        })
        .error(function(erro){
            console.log(erro);
        })
    
});