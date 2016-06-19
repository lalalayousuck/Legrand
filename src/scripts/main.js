$(document).ready(function() {
	$(".p-gallery-thumb").click(function() {			
		var largePath = $(this).attr("src");
		$(".p-gallery-pic").attr({ src: largePath});
		$(".is-active").attr({class: "p-gallery-thumb"});
		$(this).attr({class: "p-gallery-thumb is-active"});
	});
	$('.p-switchers img').click(function() {
		$('p-gallery').css({"display": "none"});

		switch ($(this).index()) {
			case (1):
				$("#p-gallery-1").css({ display: block});
			break;
			case (2):
				$("#p-gallery-2").css({ display: block});
			break;
			case (3):
				$("#p-gallery-3").css({ display: block});
			break;
			case (4):
				$("#p-gallery-4").css({ display: block});
			break;
		}
  });
});