(function ($) {
  'use strict';

  $(function () {

    if (navigator.userAgent.match(/iPhone|iPad|Android/i)) {
      $('.share-btn.whatsapp,.share-btn.facebook-messenger').css('display', 'inline-block');
    }

    // todo

    /*$('.poster a').on('click', function (event) {
      event.preventDefault();
    });*/

    lightbox.option({
      'fadeDuration': 300,
      'imageFadeDuration': 300,
      'resizeDuration': 200
    })


  });

})(jQuery);
