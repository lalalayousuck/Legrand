$(document).ready(function() {

	function showImage(largePath) {
		$(".p-gallery-pic").css('backgroundImage': 'url(largePath)');
	}

	function getNextImage() {
		var nextThumbIndex = $(".is-active").getIndex() + 1;
		if (nextThumbIndex > 2) nextThumbIndex == 0;
		var largePath = $("#p-thumb-" + nextThumbIndex).attr("src");
		return largePath;
	}

	function getPreviousImage() {
		var prevThumbIndex = $(".is-active").getIndex() + 1;
		if (prevThumbIndex < 0) prevThumbIndex == 2;
		var largePath = $("#p-thumb-" + prevThumbIndex).attr("src");
		return largePath;
	}

		
	$(".p-gallery-thumb").click(function() {
		var largePath = $(this).attr("src");
		
		.showImage(largePath);

		$(".p-gallery-thumb").removeClass("is-active");
		$(this).addClass("is-active");
	});

	$(".p-gallery-next").click(function(){
		showImage(getNextImage());
	});

	$(".p-gallery-prev").click(function(){
		showImage(getPreviousImage());
	});


	$('.p-switchers img').click(function() {
		$('.p-gallery').hide();
		$("#p-gallery-" + ($(this).index() + 1)).show();

  });

});
