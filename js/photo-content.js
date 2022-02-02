$(document).ready(function(e){
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

    $(".react-icon-map").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("active-react-icon")) {
			$(this).removeClass("active-react-icon");
		} else {
			$(this).addClass("active-react-icon");
		}
	});

    $('.share-button').click(function(e){
        $(this).toggleClass('active-content')
        $('.vn-photo-share-content').toggleClass('active-content')
        $('.vn-photo-dot-content').removeClass('active-content')
    });

    $('.dot-button').click(function(e){
        $(this).toggleClass('active-content')
        $('.vn-photo-dot-content').toggleClass('active-content')
        $('.vn-photo-share-content').removeClass('active-content')
    });


    $('#vn-photo-commentar-emoticon-button').click(function(e){
        $('.vn-commentar-textbox-emoticon-content').toggleClass('active-content')
    });
})
function injectEmojisToList(e) {
    document.getElementById("vn-photo-commentar-textbox-text").value = e.innerHTML;
};