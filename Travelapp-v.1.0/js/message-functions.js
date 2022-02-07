$(document).ready(function(){
    $('.vn-message-open-add-file-button').click(function(){
        $('#vn-message-open-add-file-content').toggleClass('active-content')
        $('#vn-message-textbox-emoticon-content').removeClass('active-content')
    })

    $('#vn-emoticon-button').click(function(){
        $('#vn-message-textbox-emoticon-content').toggleClass('active-content')
        $('#vn-message-open-add-file-content').removeClass('active-content')
    })

    $('.vn-message-body').click(function(){
        $('.vn-message-open').toggleClass('active-content')
    })

    $('.messegae-back-button').click(function(){
        $('.vn-message-open').removeClass('active-content')
    })

    
})

function injectEmojisToList(e) {
    document.getElementById("vn-message-textbox-text").value = e.innerHTML;
}