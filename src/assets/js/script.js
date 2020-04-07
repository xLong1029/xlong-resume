/*-----------------------------------------------------------------------------------
/*
/* Script for Resume
/*
-----------------------------------------------------------------------------------*/


/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */

$(window).load(function () {
  $('#loading').delay(800).fadeOut();
  $('body').delay(800);

});


jQuery(document).ready(function ($) {

  /*----------------------------------------------------*/
  /* Initializing jQuery Nice Scroll
  ------------------------------------------------------ */

  // $("html").niceScroll({
  //   cursorcolor: "#56AD48", // Set cursor color
  //   cursorwidth: "8", // Sety cursor width
  //   cursorborder: "" // Set cursor border color, default left none
  // });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------ */

  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });

  });


  /*----------------------------------------------------*/
  /* Appear Animation
  ------------------------------------------------------*/
  new WOW().init();

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
  ------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#left-nav a");

  sections.waypoint({

    handler: function (event, direction) {

      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();
      var active_link = $('#left-nav a[href="#' + active_section.attr("id") + '"]');

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");

    },
    offset: '35%'

  });


  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
  /* equal to the browser height.
  ------------------------------------------------------ */

  $(window).on('resize', function () {
    $('body').css({
      'width': $(window).width()
    })
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  $('#menu').click(function () {
    $(document.body).toggleClass("show-menu");
    $('.menu').toggleClass("close-menu");
  });


  var Menu = {

    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },

    init: function () {
      Menu.bindUIactions();
    },

    bindUIactions: function () {
      Menu.el.ham
        .on(
          'click',
          function (event) {
            Menu.activateMenu(event);
            event.preventDefault();
          }
        );
    },

    activateMenu: function () {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
  };

  Menu.init();

  /* Animate Left Menu */

  /*----------------------------------------------------*/
  /*	Work
  ------------------------------------------------------*/

  $('.work-inner').mixItUp();

});