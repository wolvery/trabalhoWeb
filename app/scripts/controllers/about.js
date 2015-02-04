'use strict';
var mes = 'Com o proposito de levar você ao geladoo, estamos vendendo gelo.'
var mes2 = 'Está muito frio aqui no polo norte.';
var mes3 = 'Hipotermia aqui é normal.';
var mes4 = 'Me resta 2 dedos.';
var messages = [mes,mes2,mes3,mes4];
/**
 * @ngdoc function
 * @name trabalhoWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trabalhoWebApp
 */
angular.module('trabalhoWebApp')
  .controller('AboutCtrl', function ($scope,$interval) {
  	
  	var main = this;
  
  	main.message = messages;
  	main.i = 0;
  	$scope.mess = main.message[0];
    
	$scope.callAtInterval = function(){
		main.i = main.i + 1;
		$scope.mess = main.message[main.i];
		if (main.i===3){
			main.i = -1;
		}
	};	
	$interval($scope.callAtInterval, 5000);
  });
