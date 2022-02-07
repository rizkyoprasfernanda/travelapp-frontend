function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').attr('src', e.target.result);
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

function injectEmojisToList(e) {
	document.getElementById("vn-upload-text-area-style").value =
		e.innerHTML;
};

$(document).ready(function (e) {
    $(".vn-upload-data-input-button-galery").click(function (e) {
        $(".vn-upload-data-file-input-bottom").toggleClass("active-content");
        $(".vn-upload-data-box").toggleClass("active-content");
    });

    $(".vn-upload-icon-emoticon-button").click(function (e) {
		$(".vn-upload-icon-emoticon-content").toggleClass("active-content");
	});

    $(".vn-upload-icon-location-button").click(function (e) {
		$(".vn-upload-icon-location-content").toggleClass("active-content");
	});

    $(".vn-upload-input-location-style").click(function (e) {
		$(".vn-upload-icon-location-content").toggleClass("active-content");
	});
});
