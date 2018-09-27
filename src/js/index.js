

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
    //freeMode: true,
    centeredSlides: true,
    //centeredSlides: false,
    //spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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


(function() {
//document.body.addEventListener('click', _onClick);
var dropBtn = document.querySelector('.js-nav-btn');
//var container = document.getElementById('container').classList;

dropBtn.addEventListener('click', showList);
function showList(evt) {
  var container = document.getElementById('container');
  if (container.classList) {
    container.classList.toggle("show");
  } else {
    var classes = container.className.split(" ");
    var i = classes.indexOf("show");
    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("show");
    container.className = classes.join(" ");
  }
  // if (container.contains('show')) {
  //   container.classList.remove('show');
  // } else {
  //   container.classList.add('show');
  // }

}
})();


(function() {

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();