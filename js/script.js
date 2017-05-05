(function ($) {
  'use strict';

  $.fn.randomize = function(childElem) {
    return this.each(function () {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function () { return (Math.round(Math.random()) - 0.5); });

      $this.remove(childElem);

      for (var i = 0; i < elems.length; i++) {
        $this.append(elems[ i ]);
      }
    });
  };

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

    $('.memory ul').randomize('li.person');

    $('#memoryModal').on('hide.bs.modal', function () {
      memoryStarted = false;
      memoryStartTime = null;
      memoryTries = 0;
      $firstMemoryCard = null;
      $('.memory .person').removeClass('active').removeClass('locked');
      $('.memory ul').randomize('li.person');
    });

    var memoryStarted = false;
    var memoryStartTime = null;
    var memoryTries = 0;
    var $firstMemoryCard = null;
    $('.memory .person').on('click', function (event) {
      if (!memoryStarted) {
        memoryStarted = true;
        memoryStartTime = new Date();
      }
      $(this).addClass('active');
      if ($firstMemoryCard === null) {
        $('.memory .person').removeClass('active');
        $(this).addClass('active');
        $firstMemoryCard = $(this);
        return;
      }
      memoryTries++;

      if ($firstMemoryCard.data('name') === $(this).data('name')) {
        $firstMemoryCard.addClass('locked');
        $(this).addClass('locked');
        if ($('.memory .person').length === $('.memory .person.locked').length) {
          var timeDiff = Math.round(((new Date()) - memoryStartTime) / 1000);
          var modalText = 'Du hast ' + timeDiff + ' Sekunden und ' + memoryTries + ' Versuche gebraucht..';
          $('#memoryModal .modal-body p').text(modalText);
          $('#memoryModal').modal();

          $('#memoryModal .memory-fb-post').on('click', function (event) {
            event.preventDefault();
            $('.share-btn.facebook').get(0).click();
          });
        }
      }
      $firstMemoryCard = null;
    });

  });

})(jQuery);
