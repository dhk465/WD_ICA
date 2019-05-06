$(document).ready(function () {
	$("#menu a").on('click', function (e) {
		e.preventDefault();
		$('#buttons').toggleClass("toggle");
	});
	$.scrollify({
		section: ".scroll"
	});
	$(".buttons").click(function (e) {
		e.preventDefault();
		$.scrollify("move", $(this).attr("href"));
	});
});
