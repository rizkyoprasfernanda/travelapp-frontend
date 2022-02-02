$(document).ready(function (e) {
	$(".react-icon-love").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("active-react-icon-love")) {
			$(this).removeClass("active-react-icon-love");
		} else {
			$(this).addClass("active-react-icon-love");
		}
	});

	$(".react-icon-bookmark").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("active-react-icon-bookmark")) {
			$(this).removeClass("active-react-icon-bookmark");
		} else {
			$(this).addClass("active-react-icon-bookmark");
		}
	});

	$(".share-button").click(function (e) {
		$(this).toggleClass("active-content");
		$(".vn-photo-share-content").toggleClass("active-content");
		$(".vn-photo-dot-content").removeClass("active-content");
	});

	$(".dot-button").click(function (e) {
		$(this).toggleClass("active-content");
		$(".vn-photo-dot-content").toggleClass("active-content");
		$(".vn-photo-share-content").removeClass("active-content");
	});

	$("#vn-photo-commentar-emoticon-button").click(function (e) {
		$(".vn-commentar-textbox-emoticon-content").toggleClass("active-content");
	});

	$(".react-icon-comment").click(function (e) {
		$(".vn-photo-pinned-content").removeClass("active-content");
		$(".vn-photo-map-content").removeClass("active-content");
		$(".vn-photo-navigation-commentar-content").addClass("active-content");
		$(this).addClass("active-react-icon-comment");
		$(".react-icon-pinned").removeClass("active-react-icon-pinned");
		$(".react-icon-map").removeClass("active-react-icon-map");
	});
	$(".react-icon-pinned").click(function (e) {
		$(".vn-photo-navigation-commentar-content").removeClass("active-content");
		$(".vn-photo-map-content").removeClass("active-content");
		$(".vn-photo-pinned-content").addClass("active-content");
		$(this).addClass("active-react-icon-pinned");
		$(".react-icon-map").removeClass("active-react-icon-map");
		$(".react-icon-comment").removeClass("active-react-icon-comment");
	});
	$(".react-icon-map").click(function (e) {
		$(".vn-photo-navigation-commentar-content").removeClass("active-content");
		$(".vn-photo-pinned-content").removeClass("active-content");
		$(".vn-photo-map-content").addClass("active-content");
		$(this).addClass("active-react-icon-map");
		$(".react-icon-pinned").removeClass("active-react-icon-pinned");
		$(".react-icon-comment").removeClass("active-react-icon-comment");
	});
});
function injectEmojisToList(e) {
	document.getElementById("vn-photo-commentar-textbox-text").value =
		e.innerHTML;
}
