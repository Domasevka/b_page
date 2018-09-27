

(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia( '(max-width:868px)' );

  // keep track of swiper instances to destroy later
  var mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // var enableSwiper = function() {
  //
  //   mySwiper = new Swiper ('.swiper-container', {
  //
  //     loop: true,
  //
  //     slidesPerView: 'auto',
  //
  //     centeredSlides: true,
  //
  //     a11y: true,
  //     keyboardControl: true,
  //     grabCursor: true,
  //
  //     // pagination
  //     pagination: '.swiper-pagination',
  //     paginationClickable: true,
  //
  //   });
  //
  // };


  <!-- Initialize Swiper -->
  var enableSwiper = function() {
    mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    //slidesPerView: 3,
    centeredSlides: true,
    //centeredSlides: false,
    //spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      868: {
        centeredSlides: false,

      },

    }
  });


  var container = document.getElementById('container');

  document.querySelector('.slide-1').addEventListener('mouseover', function (e) {
    e.preventDefault();
    container.classList.add('show');
    mySwiper.slideTo(0, 0);
  });

  document.querySelector('.slide-2').addEventListener('mouseover', function (e) {
    e.preventDefault();
    container.classList.add('show');
    mySwiper.slideTo(1, 0);
  });

  document.querySelector('.slide-3').addEventListener('mouseover', function (e) {
    e.preventDefault();
    container.classList.add('show');
    mySwiper.slideTo(2, 0);
  });

  document.getElementById('container').addEventListener('mouseover',   mouseOver);
  function  mouseOver() {
    container.classList.add('show');
  }

  document.getElementById('container').addEventListener('mouseout',  mouseOut);
  function mouseOut() {
    container.classList.remove('show');
  }

  document.querySelector('.js-slide').addEventListener('mouseover',   mouseOverBtn);
  function  mouseOverBtn() {
    container.classList.remove('show');
  }
  };
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */

document.body.addEventListener('click', _onClick);

function _onClick(evt) {
  //снятие класса clicked с активного элемента
  var сlickedElement = document.querySelector('.js-menu-btn');
  var container = document.getElementById('container');

  if (сlickedElement) {
    container.classList.add('show');
  }
  //добавление класса сlicked элементу, на котором
  //сработал обработчик события
  //evt.currentTarget.classList.add('сlicked');
}