'use strict';

/**
 * @ngdoc function
 * @name tameApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the tameApp
 */
angular.module('tameApp')
  .controller('ContactoCtrl', function ($scope) {
   
   $scope.registro = function(registrado){

    	if ($scope.registrado == undefined || $scope.registrado == ''){
    		alert('Por favor, identifíquese.');
    	}
    	else{
    		alert('Bienvenido a la fiesta ' + $scope.registrado);
    	}
    }
  });
