 $(document).on('ready', function() {



    jQuery('.responsive-button').on('click', function(){
      jQuery('.menuMainwrap .headMenuSideLink > ul').slideToggle();        
      if(jQuery('.menuMainwrap .headMenuSideLink > ul').is(':visible')){
        jQuery('body').toggleClass('responsive-menu-open');       
      }
      
    });

    jQuery('.topNav .headMenuSideLink > ul > li.haveSubmenu > .caret').on('click', function(){
      if(jQuery(this).next('.submenu').is(':visible')){
        jQuery(this).next('.submenu').slideUp();
      }
      else{
        jQuery('.topNav .headMenuSideLink > ul > li.haveSubmenu > .submenu').slideUp();
        jQuery(this).next('.submenu').slideDown();
      }
      });


    $('.periodSwitch .switchBtn input').change(function() {
      if(this.checked) {
          $(this).closest('.priceBlockIn').find('.Price.monthly').addClass('d-none');
          $(this).closest('.priceBlockIn').find('.Price.yearly').removeClass('d-none');
      }
      else{
        $(this).closest('.priceBlockIn').find('.Price.monthly').removeClass('d-none');
        $(this).closest('.priceBlockIn').find('.Price.yearly').addClass('d-none');
      }
    });

      


   $('.homeBannerIn').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          dots: false,
          // centerMode: true,
          // variableWidth: true,
          // infinite: true,
          focusOnSelect: true,
          cssEase: 'linear',
          touchMove: true,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: false,
            centerMode: false,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

   

   const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        video.setAttribute("controls", "true");
    } else {
        video.pause();
        video.removeAttribute("controls", "true");
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
    video.removeAttribute("controls", "true");
});



 });
