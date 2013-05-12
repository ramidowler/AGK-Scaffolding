		$(function(){
		
			$("#home-button").css({
				opacity: 1,
				color: '#0055bd',
				borderTopColor: '#0055bd',
				borderLeftColor: '#0055bd',
				borderBottomColor: '#0055bd',
				borderRightColor: '#0055bd',
			});
			$("#aboutus-button").css({
				opacity: .8
			});
			$("#services-button").css({
				opacity: .8
			});
			$("#gallery-button").css({
				opacity: .8
			});
			$("#safety-button").css({
				opacity: .8
			});
			$("#contactus-button").css({
				opacity: .8
			});
		
            $("#nav-wrap div").click(function(){
            	
            	$clicked = $(this);
            	
            	// if the button is not already "transformed" AND is not animated
            	if ($clicked.css("opacity") != ".8" && $clicked.is(":not(animated)")) {
            		
            		$clicked.animate({
					opacity: 1,
					color: '#0055bd',
					borderTopColor: '#0055bd',
					borderLeftColor: '#0055bd',
					borderBottomColor: '#0055bd',
					borderRightColor: '#0055bd',
				        }, 300 );
					
			
            		// each button div MUST have a "xx-button" and the target div must have an id "xx" 
            		var idToLoad = $clicked.attr("id").split('-');
            		
            		//we search trough the content for the visible div and we fade it out
            		$("#content-wrap").find("div:visible").fadeOut(200, function(){
            			//once the fade out is completed, we start to fade in the right div
            			$(this).parent().find("#"+idToLoad[0]).fadeIn(200);
						
						
            		})
					
				
					
					
            	}
				


				
            	//we reset the other buttons to default style
            	$clicked.siblings("#nav-wrap div").animate({
            		opacity: .8,
					color: '#ccc',
					borderTopColor: '#000',
					borderLeftColor: '#000',
					borderRightColor: '#000',
					borderBottomColor: '#000'
            	}, 300 );
            	
            });
			

		});	
		
			