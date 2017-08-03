var app = angular.module("myapp" , []);

 // crea el controlador 
 app.controller( "mycontrol" , function($scope){
 $scope.name = "Cristopher" ; 
 $scope.apelido = "Garcia";

  $scope.contador = 0 ; 
  $scope.contadores = function  (){
 $scope.contador ++ ; 
 } ; 


 } ) ; 



app.controller("LunchCheckController" ,["$scope",  function(m) {
	m.nuevocomentario = {}; 
	m.comentarios = [ 
         {
         	comentario: "modulo 1" ,
         	usuario:"Coursera" 
         },
         {
         		comentario: "controller" ,
         	usuario:"Coursera" 
         }

	] ; // fin de comentarios 

m.agregarcomentario = function()
		{
			m.comentarios.push(m.nuevocomentario) ; 
			m.nuevocomentario = {}; 
		}

} ] );

