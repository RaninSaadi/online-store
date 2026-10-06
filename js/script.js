// init Isotope
var $products = $('.all-products').isotope({
    // options
    originLeft: false,
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $products.isotope({ filter: filterValue });
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        320:{
         slidesPerView:2,
         spaceBetween:20,
        },
        576:{
         slidesPerView:3,
         spaceBetween:15,
        },
        992:{
          slidesPerView:4,
          spaceBetween:15,
        }
    },
  
   
  });