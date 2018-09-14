$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "fade",
        directionNav:"true",
        slideshowSpeed:"5000",
        prevText:"",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });