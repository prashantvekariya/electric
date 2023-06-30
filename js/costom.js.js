$('#loop_1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  items: 1,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  dotsData: true,

})
$('#loop_2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

})

$('#loop_3').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

})


new WOW().init();

var owl = $('#loop_1');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function (event) {
  new WOW().init();
})

$("#count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});
$("#count1").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});
$("#count2").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});
$("#count3").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

// $("#counter1").countMe(1, 1);
// $("#counter2").countMe(40, 65);
// $("#counter3").countMe(40, 65);
// $("#counter4").countMe(40, 65);

$(document).ready(function () {
  $(window).scroll(function () {
    h = $(window).scrollTop();
    if (h > 200) {
      $('.header_10').addClass('sticky');
      $('.toggle').fadeIn(500);
    }
    else {
      $('.header_10').removeClass('sticky');
      $('.toggle').fadeOut(100);
    }
  })

  $('.toggle').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
  })

  setInterval(function(){
    $('#loder').fadeOut()
  },1000)
})
