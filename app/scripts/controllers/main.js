'use strict';

//Directive para o sobre
//Elementos
//constructor dos elementos
var Img = function(ident, img, titulo,texto,price){    
    this.ident = ident;
    this.img = img;
    this.titulo = titulo;
    this.texto = texto;
    this.price = price;
}
//dados
var item1 = new Img(1,'../../images/itens/dryice.jpg','Gelo Seco','Gelo com propriedades secativas.',10.0);
var item2 = new Img(2,'../../images/itens/iceball.jpg','Bola de Gelo','Bola de material gelado.',2.0);
var item3 = new Img(3,'../../images/itens/icebed.jpg','Cama de Gelo','Cama king size de gelo.',800.0);
var item4 = new Img(4,'../../images/itens/iceberg.jpg','Iceberg','Iceberg original.',2000.0);
var item5 = new Img(5,'../../images/itens/icecup.jpg','Copo de Gelo','Copo para manter a bebida gelada.',35.0);
var item6 = new Img(6,'../../images/itens/icediamon.jpg','Diamante de Gelo','Gelo no formato de Diamante.',100.0);

//array
var elementos = [item1,item2,item3,item4,item5,item6];

angular.module('trabalhoWebApp')
.directive('gelos',function(){
  return{
    restrict: 'A',
    scope:{image:'='},
    templateUrl:'views/itens/item.html'

  }
});




/**
 * @ngdoc function
 * @name trabalhoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trabalhoWebApp
 */
angular.module('trabalhoWebApp')
  .controller('MainCtrl', function ($scope) {
    
	$scope.itensSobre = elementos;
	
	
  });
