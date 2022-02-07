$(document).ready(function (e) {
    $(".vn-header-profile-image").click(function (e) {
        $(".vn-header-profile-content-container").toggleClass("active-content");
        $(".vn-notification").removeClass("active-content");
        $(".vn-message").removeClass("active-content");
        $('.vn-message-open').removeClass('active-content')
    });

    $(".notification-header").click(function (e) {
        $(".vn-notification").toggleClass("active-content");
        $(".vn-header-profile-content-container").removeClass("active-content");
        $(".vn-message").removeClass("active-content");
        $('.vn-message-open').removeClass('active-content')
    });

    $(".message-header").click(function (e) {
        $(".vn-message").toggleClass("active-content");
        $(".vn-header-profile-content-container").removeClass("active-content");
        $(".vn-notification").removeClass("active-content");
        $('.vn-message-open').removeClass('active-content')
    });

    $(".vn-header-upload-button").click(function (e) {
        $(".vn-upload-background").toggleClass("active-content");
    });

    $(".cancel-upload").click(function (e) {
        $(".vn-upload-background").removeClass("active-content");
    });

    $(".vn-photo").click(function (e) {
        $(".vn-photo-content-background").toggleClass("active-content");
    });

    $(".vn-photo-content-close-button").click(function (e) {
        $(".vn-photo-content-background").removeClass("active-content");
    });


    
});