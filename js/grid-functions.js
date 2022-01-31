$(document).ready(function () {
	$(".vn-item-love").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("love-color")) {
			$(this).removeClass("love-color");
		} else {
			$(this).addClass("love-color");
		}
	});

	$(".vn-item-bookmark").click(function (e) {
		if ($(this).hasClass("bookmark-color")) {
			$(this).removeClass("bookmark-color");
		} else {
			$(this).addClass("bookmark-color");
		}
	});

	$(".vn-info-3dot-button").click(function (e) {
		var active = $(this).next(".vn-info-3dot-button-content");
		if (active.hasClass("active")) {
			$(this).next(".vn-info-3dot-button-content").removeClass("active");
		} else {
			$(this).next(".vn-info-3dot-button-content").addClass("active");
		}
	});
});
