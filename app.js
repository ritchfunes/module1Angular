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



app.controller("LunchCheckController" , function($scope) {
	$scope.nuevocomentario = {}; 
	$scope.comentarios = [ 
         {
         	comentario: "modulo 1" ,
         	usuario:"Coursera" 
         },
         {
         		comentario: "controller" ,
         	usuario:"Coursera" 
         }

	] ; // fin de comentarios 

$scope.agregarcomentario = function()
		{
			$scope.comentarios.push($scope.nuevocomentario) ; 
			$scope.nuevocomentario = {}; 
		}

});

