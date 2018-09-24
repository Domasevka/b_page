
<!-- Initialize Swiper -->

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    //slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // virtual: {
    //   slides: (function () {
    //     var slides = [];
    //     for (var i = 0; i < 3; i += 1) {
    //       slides.push('Slide ' + (i + 1));
    //     }
    //     return slides;
    //   }()),
    // },
      breakpoints: {
        1024: {
          centeredSlides: false,
        },
        // 768: {
        //   centeredSlides: false,
        // },
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        //  },
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        // }
         }
  });
  document.querySelector('.slide-1').addEventListener('mouseover', function (e) {
    e.preventDefault();
    // var container = document.getElementById('container');
    //
    // if (container) {
    //   container.classList.remove('show');
    // }
    // e.currentTarget.classList.add('show');
    // container.classList.add("show");
    swiper.slideTo(0, 0);
  });
  document.querySelector('.slide-2').addEventListener('mouseover', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 0);
  });
  document.querySelector('.slide-3').addEventListener('mouseover', function (e) {
    e.preventDefault();
    swiper.slideTo(2, 0);
  });
// document.querySelector('.slide-1').addEventListener('mouseenter', function(){
//     console.log('stop autoplay');
//
//   });
// document.querySelector('.slide-1').addEventListener('mouseover', function(){
//     console.log('start autoplay');
//
//   });
//container.classList.add("show");
