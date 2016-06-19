$(document).ready(function() {
	$(".p-gallery-thumb").click(function() {
		var largePath = $(this).attr("src");
		$(".p-gallery-pic").attr({ src: largePath});
		$(".is-active").attr({class: "p-gallery-thumb"});
		$(this).attr({class: "p-gallery-thumb is-active"});
	});

	$('.p-switchers img').click(function() {
		$('.p-gallery').hide();
		$("#p-gallery-" + ($(this).index() + 1)).show();
  });
});