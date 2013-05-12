	$(function() {
		
		// on mouse over
		$("a>.thumb").hover(function () {
			
			$(this).stop().animate({
				borderTopColor: '#0055bd',
				borderLeftColor: '#0055bd',
				borderRightColor: '#0055bd',
				borderBottomColor: '#0055bd',
				opacity: 1,
			}, 300);
		},
		// on mouse out
		function () {
			
			$(this).stop().animate({
				borderTopColor: '#cccccc',
				borderLeftColor: '#cccccc',
				borderRightColor: '#cccccc',
				borderBottomColor: '#cccccc',
				opacity:.8,
			}, 300);
		});
	});
	
		$(function() {
		
		// on mouse over
		$("#social-wrap>.social-button").hover(function () {
			
			$(this).stop().animate({
				opacity: 1,
			}, 300);
		},
		// on mouse out
		function () {
			
			$(this).stop().animate({
				opacity:.8,
			}, 300);
		});
	});
	
	
			$(function() {
		
		// on mouse over
		$("button").hover(function () {
			
			$(this).stop().css({
				color:'#0055bd',
			}, 200);
		},
		// on mouse out
		function () {
			
			$(this).stop().css({
				color:'#ccc',
			}, 200);
		});
	});
	
				$(function() {
		
		// on mouse over
		$("#flag-info>a").hover(function () {
			
			$(this).stop().css({
				color:'#000',
				
			});
		},
		// on mouse out
		function () {
			
			$(this).stop().css({
				color:'#fff',
			});
		});
	});
	
	$(function() {
		
		// on mouse over
		$(".button").hover(function () {
			
			$(this).stop().css({
			'-moz-box-shadow':'0 0 10px 3px rgba(138,81,157,0.7)',
   	'-webkit-box-shadow': '0 0 10px 3px rgba(138,81,157,0.7)',
   	'box-shadow':    '0 0 10px 3px rgba(138,81,157,0.7)',
				
			});
		},
		// on mouse out
		function () {
			
			$(this).stop().css({
			'-moz-box-shadow':'inset 0 0 5px 5px rgba(0,0,0,0.2)',
   	'-webkit-box-shadow': 'inset 0 0 5px 5px rgba(0,0,0,0.2)',
   	'box-shadow':    'inset 0 0 5px 5px rgba(0,0,0,0.2)',
			});
		});
	});