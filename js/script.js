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
    });

    var $facebookTimeline = $('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTUpiratenGraz%2F&tabs=timeline%2Cevents%2C%20messages&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=202401800276459" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
    var $twitterTimeline = $('<a class="twitter-timeline" data-height="1000" data-dnt="true" href="https://twitter.com/TUpiratenGraz">Tweets by TUpiratenGraz</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');

    $('a.load-facebook').on('click', function (event) {
      event.preventDefault();
      $(this).parent().append($facebookTimeline);
      $(this).remove();
    });
    $('a.load-twitter').on('click', function (event) {
      event.preventDefault();
      $(this).parent().append($twitterTimeline);
      $(this).remove();
    });

  });

})(jQuery);
