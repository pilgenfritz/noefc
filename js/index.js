$(document).ready(function(){
	/*$.backstretch("img/main.jpg");*/
	
	/*function backstretchResize(){
		$('.back-figure').each(function(index){
			$parent = $(this);
			backSrc = $(this).find('img').attr('ng-src');
			$(this).backstretch(backSrc)
			$parent.find('.back-img').hide();
		})
	}*/

	$('#main').fullpage({
		navigation: true,
		afterLoad (anchorLink, index){
            if(index == 2){
            	effect2()
            }else if(index == 3){
            	effect3()
            }else if(index == 4){
            	effect4()
            }else{
            	effect1()
            }
        }
	});

	$('.btn-action').on('click', function(){
		$.fn.fullpage.moveTo(4);
	})

	function effect1(){
		var tl1 = new TimelineLite();
			tl1.to('.section-apresentacao h2', 1, {autoAlpha: 1, x:"0px"})
			   .to('.section-apresentacao h3', 1, {autoAlpha: 1, x:"0px"}, "-=0.5")
	}
	function effect2(){
		var tl2 = new TimelineLite();
			tl2.to('.section-agua h2', 1, {autoAlpha: 1, y:"0px"})
			   .to('.section-agua h3', 1, {autoAlpha: 1, y:"0px"}, "-=0.8")	
			   .to('.section-agua h4', 1, {autoAlpha: 1, y:"0px"}, "-=0.8")	
			   .to('.section-agua .btn-action', 1, {autoAlpha: 1, y:"0px"}, "-=0.2")	
	}
	function effect3(){
		var tl3 = new TimelineLite();
			tl3.to('.section-sustentavel h1', 1, {autoAlpha: 1, y:"0px"})
			   .to('.section-sustentavel h2', 1, {autoAlpha: 1, y:"0px"}, "-=0.8")	
			   .staggerTo('.section-sustentavel figure', 1, {autoAlpha: 1, y:"0px", x:"0px"}, "-=0.8")	
	}
	function effect4(){
		
	}


	
})

