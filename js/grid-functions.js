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

    $('#tes').click(function(e){
        $(this.closest('.vn-info-3dot-button-content')).toggleClass('active')
    })
  });

  