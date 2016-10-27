$(document).ready(function(){
	$.backstretch("img/main.jpg");

	
	function backstretchResize(){
		$('.back-figure').each(function(index){
			$parent = $(this);
			backSrc = $(this).find('img').attr('src');
			$(this).backstretch(backSrc)
			$parent.find('.back-img').hide();
		})
	}

	 $('.item-team').on('click', function(){	
	 	tlContentOpen = new TimelineLite();
	 	tlContentOpen.to('.overlay-active', 0.5, {autoAlpha: 0.5})
		 			 .to('.wrap-content', 0.5, {top: "2.5%", marginTop: "0", height: "95%"})
		 			 .to('.wrap-content', 0.5, {left: "2.5%", marginLeft: "0", width: "95%"}, "-=0.25")
		 			 .to('.wrap-content .content-time', 0.5, {autoAlpha: 1, y:0, zIndex:1})
		 			 .to('.close-content', 0.5, {autoAlpha: 1})
	 })
	 $('.item-match').on('click', function(){	
	 	tlContentJogosOpen = new TimelineLite();
	 	tlContentJogosOpen.to('.overlay-active', 0.5, {autoAlpha: 0.5})
		 			 .to('.wrap-content', 0.5, {top: "2.5%", marginTop: "0", height: "95%"})
		 			 .to('.wrap-content', 0.5, {left: "2.5%", marginLeft: "0", width: "95%"}, "-=0.25")
		 			 .to('.wrap-content .content-jogos', 0.5, {autoAlpha: 1, y:0, zIndex:1})
		 			 .to('.close-content', 0.5, {autoAlpha: 1})
	 })

	 $('.close-content').on('click', function(){
	 	tlContentClose = new TimelineLite();
	 	tlContentClose.to('.close-content', 0.5, {autoAlpha: 0})
	 				  .to('.wrap-content .content', 0.5, {autoAlpha: 0, y:"50px", zIndex:"-1"})
	 				  .to('.wrap-content', 0.5, {left: "50%", marginLeft: "-1px", width: "1px"})
	 				  .to('.wrap-content', 0.5, {top: "50%", marginTop: "-50px", height: "0px"})
	 				  .to('.overlay-active', 0.25, {autoAlpha: 0})
	 })
})

var myApp = angular.module('myApp',[]);

myApp.controller('time', ['$scope', '$http', function($scope, $http) {
  $scope.nomeTime = 'La Barca de Noé!';

  var loadTime = function(){
  	$http.get("files/jogador.json").success(function(data){
  		$scope.jogadores = data;
  	})
  }

  var loadJogos = function(){
  	$http.get("files/jogos.json").success(function(data){
  		$scope.jogos = data;
  	})
  }

  loadTime();
  loadJogos();
}]);

