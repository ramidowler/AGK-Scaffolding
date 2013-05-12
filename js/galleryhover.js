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
	
	