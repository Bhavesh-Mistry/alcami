$(document).ready(function () {

  // video play-pause
  $(".icon-play").click(function (e) {
    e.preventDefault();
    let video = $(this).siblings("video")[0];

    if (video.paused) {
      video.play();
      $(this).hide();
    }
  });


  // product slider
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  $('.prev').on('click', function () {
    $('.product-slider').slick('slickPrev');
  });

  $('.next').on('click', function () {
    $('.product-slider').slick('slickNext');
  });

  /*testimonials slider */
  $(".ts-lists").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });


  // counter numbers
  var counterStarted = false;

  function startCounter() {
    if (!counterStarted) {
      $('.cs-lists h4').each(function () {
        var $this = $(this);
        var countTo = parseInt($this.text());
        $this.text('0%');

        $({ countNum: 0 }).animate(
          { countNum: countTo },
          {
            duration: 5000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum) + "%");
            },
            complete: function () {
              $this.text(countTo + "%");
            }
          }
        );
      });

      counterStarted = true;
    }
  }

  $('.count-sec').waypoint(
    function () {
      startCounter();
    },
    { offset: '75%', triggerOnce: true }
  );


  // add to cart event
  function updateCartLink() {
    let selectedFlavor = $('input[name="product"]:checked').siblings('.radio-label').text().trim();
    let selectedPurchase = $('input[name="most"]:checked').siblings('.radio-label').text().trim();

    let baseUrl = "https://example.com/cart?";
    let newUrl = `${baseUrl}flavor=${encodeURIComponent(selectedFlavor)}&purchase=${encodeURIComponent(selectedPurchase)}`;

    $(".btn-add-to-cart").attr("href", newUrl);
  }

  $('input[name="product"], input[name="most"]').on("change", updateCartLink);

  updateCartLink();


  /* back to top */
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});


/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 70) {
    $("header.navbar").addClass("darkHeader");
    $(".btnBacktotop").addClass("active");
  } else {
    $("header.navbar").removeClass("darkHeader");
    $(".btnBacktotop").removeClass("active");
  }
});

