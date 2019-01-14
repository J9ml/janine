$(document).ready(function(){
  // $('.carousel').slick({
  //   // slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false,
  //   draggable: false,
  //   pauseOnFocus: false,
  //   pauseOnHover: false
  // });

//   $('.carousel').slick({
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: false,
//   draggable: false,
//   pauseOnFocus: false,
//   pauseOnHover: false
// });


$('.carousel').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  draggable: false,
  pauseOnFocus: true,
  pauseOnHover: true,
  dots: false,
  focusOnSelect: true,
  // speed: 300,
  responsive: [

    {
      breakpoint: 1277,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

      }
    },


    {
      breakpoint: 1036,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    },


    {
      breakpoint: 629,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var SlickSlider = $t.slick({ autoplay: $auto, autoplaySpeed: $time, }); SlickSlider.on('afterChange', function(){ console.log("This mos def fires"); $('.image-zoom').trigger('zoom.destroy'); initZoom() });
// ZOOM
$('.background-writing').zoom();

// STYLE GRAB
$('.background-writing').zoom({ on:'grab' });

// STYLE CLICK
$('.background-writing').zoom({ on:'click' });

// STYLE TOGGLE
$('.background-writing').zoom({ on:'toggle' });



  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });
});
