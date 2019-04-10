/*-----------------------------------------------------------------------------------
/*
/* Script for Resume
/*
-----------------------------------------------------------------------------------*/


/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */

$(window).load(function(){

  $('.loader').fadeOut();    
  $('#preloader').delay(350).fadeOut('slow');    
  $('body').delay(350);   

  });


jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* Initializing jQuery Nice Scroll
------------------------------------------------------ */

  $("html").niceScroll({
    cursorcolor:"#11abb0", // Set cursor color
    cursorwidth: "8", // Sety cursor width
    cursorborder: "" // Set cursor border color, default left none
  });


/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

  setTimeout(function() {
   $('h1.responsive-headline').fitText(1, { minFontSize: '28px', maxFontSize: '72px' });
 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

 $('.smoothscroll').on('click',function (e) {
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

console.log(sections);
var navigation_links = $("#left-nav a");

sections.waypoint({

    handler: function(event, direction) {

     var active_section;

    active_section = $(this);
    if (direction === "up") active_section = active_section.prev();
    console.log(active_section);
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

 $(window).on('resize', function() {
      $('body').css({ 'width': $(window).width() })
 });

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

$('#menu').click(function(){
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
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();

/* Animate Left Menu */ 


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

  $('.item-wrap a').magnificPopup({

     type:'inline',
     fixedContentPos: false,
     removalDelay: 200,
     showCloseBtn: false,
     mainClass: 'mfp-fade'

  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
  });

});