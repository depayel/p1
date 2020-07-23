$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  var stop = $("#section2").offset().top-400;
    $(window).scroll(function() {
        if ($(window).scrollTop() > stop ) {
            $(window).off("scroll");
            $('.count').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data") }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    });


    $("#facebook-icon") .mouseover(function () {
       this.src= "./assets/icons/facebook-hover.png"
    }).mouseout(function () {
        this.src= "./assets/icons/facebook.png"
    });

    $("#instagram-icon") .mouseover(function () {
       this.src= "./assets/icons/instagram-hover.png"
    }).mouseout(function () {
        this.src= "./assets/icons/instagram.png"
    });

    $("#twitter-icon") .mouseover(function () {
       this.src= "./assets/icons/twitter-hover.png"
    }).mouseout(function () {
        this.src= "./assets/icons/twitter.png"
    });

    $("#youtube-icon") .mouseover(function () {
       this.src= "./assets/icons/youtube-hover.png"
    }).mouseout(function () {
        this.src= "./assets/icons/youtube.png"
    });
})
