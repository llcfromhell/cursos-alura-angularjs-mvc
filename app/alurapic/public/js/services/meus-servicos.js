/* global angular */
angular.module('meusServicos', ['ngResource'])

    .factory('fotosResource', function($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            'update': {
                method : 'PUT'
            }
        });
    })
    .factory('cadastroFoto', function(fotosResource, $q) {
        var service = {};
        
        service.cadastrar = function(foto) {
        
            return $q(function(resolve, reject) {

                if (foto._id) {
                    
                    fotosResource.update({fotoId:foto._id}, foto, 
                    
                        function(){
                            
                            resolve({
                                mensagem: "Dados salvos com sucesso!"
                            });
                            
                        }, 
                    
                        function(erro){
                            console.log(erro);
                            reject({mensagem : "Não foi possível salvar os dados."});
                        });
                    
                } else {
                    fotosResource.save(foto, 
                    
                        function(){
                            
                            resolve({
                                mensagem: "Dados salvos com sucesso!"
                            })
                            
                        }, 
                    
                        function(erro){
                            console.log(erro);
                            reject({
                                mensagem : "Não foi possível salvar os dados."
                            });
                        });
                    
                }
                
            });
        
        }
        
        return service;
    
    });