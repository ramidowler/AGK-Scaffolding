$(function() {
		$("div>.button").hover(function () {
			$(this).stop().animate({
				opacity: .9,
			}, 300);
		},
		// on mouse out
			function () {
			

					$(this).stop().animate({
				opacity:.7,
			}, 300)
			

			
		});
	});