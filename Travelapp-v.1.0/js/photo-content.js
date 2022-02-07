$(document).ready(function (e) {
	$(".navigation-love-icon").click(function (e) {
		e.preventDefault();
		$(".react-icon-love-icon").toggleClass("active-react");
	});

	$(".commentar-love-icon").click(function (e) {
		e.preventDefault();
		$(".commentar-react-icon-love-icon").toggleClass("active-react");
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
		$(".dot-button").removeClass("active-content");
		$(this).toggleClass("active-content");
		$(".vn-photo-share-content").toggleClass("active-content");
		$(".vn-photo-dot-content").removeClass("active-content");
	});

	$(".dot-button").click(function (e) {
		$(".share-button").removeClass("active-content");
		$(this).toggleClass("active-content");
		$(".vn-photo-dot-content").toggleClass("active-content");
		$(".vn-photo-share-content").removeClass("active-content");
	});

	$("#vn-photo-commentar-emoticon-button").click(function (e) {
		$(".vn-commentar-textbox-emoticon-content").toggleClass("active-content");
	});

	$(".3dot-comment").click(function (e) {
		$(".photo-pinned-user-impression-data-icon-content").toggleClass("active-content");
	});

	$(".commentar-pinned-icon").click(function (e) {
		$(".vn-photo-commentar-pinned").toggleClass("active-content");
		$(".photo-pinned-user-impression-data-icon-content").removeClass("active-content");
		$(".photo-pinned-user-impression-data-icon-content-style").toggleClass("un-active-content");
		$(".photo-unpinned-user-impression-data-icon-content-style").toggleClass("active-content");
		$(".vn-photo-user-impression").toggleClass("active-pinned");
	});

	$(".commentar-unpinned-icon").click(function (e) {
		$(".vn-photo-commentar-pinned").removeClass("active-content");
		$(".photo-pinned-user-impression-data-icon-content").removeClass("active-content");
		$(".photo-pinned-user-impression-data-icon-content-style").removeClass("un-active-content");
		$(".photo-unpinned-user-impression-data-icon-content-style").removeClass("active-content");
		$(".vn-photo-user-impression").removeClass("active-pinned");
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
