$(document).ready(function() {
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	var options = {
    strings: ['<span style="color: #FFFFFF;">> Miguel </span><span style="color: #D8C787;">VF</span>'],
		typeSpeed: 75, 
		backSpeed: 50,
		smartBackspace: true, 
		showCursor: true, 
		cursorChar: '_', 
    attr: null,
    cursorColor: inherit
	};
	
	// Will remove overlay after 30 sec for users cannnot load properly.
	setTimeout(function() {
    $('.overlay, body').addClass('loaded');
    var typed = new Typed('.typewriter', options);
	}, 3000);
})