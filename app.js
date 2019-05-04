$(document).ready(function () {

	$("#menu a").on('click', function (e) {
		e.preventDefault();
		$('#buttons').toggleClass("toggle");
	});

});
