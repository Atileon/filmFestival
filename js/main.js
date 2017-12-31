// $(document).ready(function(){
// Dont touch the code upon this line, it's just in case of move up the link to jquery library on the top on head tag
'use strict';


  // The followin code is to toggle the movies

// $('[data-target="#demo"]').on('click',function(){
//
//
//
//     $("#other").collapse("hide")
//     });
//
//      $('[data-target="#other"]').on('click',function(){
//     $("#demo").collapse("hide")
//     });


// This Line just to go to top on Refresh


$('html, body').animate({ scrollTop: 0 }, 'slow');
  // ==================================



// This line to prevent Scroll clickin on the navbar items

// $('body').addClass('stop-scrolling');

// This section to toggle class active from menu and add effects

$('.nav-item').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('#main-nav.navbar').fadeIn(700);
  $('#title').hide();
  $('.container-film, .film').addClass('film-color-2');
});

$('social').on('click', function(){
  $(this).hasClass('social').removeClass('active');
});

// this to hide te menu on small devices when clickin out of the menu

$(window).on('click', function(){
  $('.navbar-toggler').attr('aria-expanded','false');
  $('.navbar-collapse').removeClass('show');
});

//==========================================

// This to fade the NavBar
$(window).on('scroll',function(){
 if($('.nav-item').hasClass('active')){
   $('#main-nav').css('opacity', .9);
   $('.container-film,.film').addClass('film-color-2');
   $('.nav-item').css('opacity', 1).addClass('shadow-text');
 } else{
   $('#main-nav').css('opacity', 1);
   $('.nav-item').css('opacity', 1).removeClass('shadow-text');
   $('.container-film,.film').removeClass('film-color-2');
 }
});
// ==================================

// This simply to return at home and back to top nav
// then fade in the logo
$('#home').on('click', function(){

  // this will animate the scroll to the top of page
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  location.reload();
  $('.container-film, .film').removeClass('film-color-2').stop();
});
// ======================================================

// The next lines to hide the film effect from the menu when toggle to vertical menu
$("button.navbar-toggler").click(function(){
    const valore =  $(".navbar-toggler").attr("aria-expanded");

    if (valore == "false") {
      $("div.film").addClass('collapse');
    }else if(valore == "true"){
      $("div.film").removeClass('collapse');
    }
   });
// ==================================
// ===================================

    // For Youtube Video on Modal
    // This could take the data-video attribute from button and the src too to post on the iframe on Bootstrap modal


    $(".video-modal").click(function () {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close, #trailer, #info').on('click, hidden.bs.modal', function () {
          $(theModal + ' iframe').attr('src', videoSRC);
          // I hate the space after the(') on the next line!!!!! I must to pay attention to spaces lol

          $(theModal + ' .to-clone').remove('.to-clone');
        });
        $(this).prev().clone().removeClass('d-none').appendTo('.cloned');
      });

      $('#august-6, #august-7, #august-8').hide();
// Next lines to change aspect of buttons when active on the Movies pages

    $('.movie-btn').on('click',function(){
      const movies = $(this).data('date');

      $(`#${movies}`).fadeIn(2000).siblings().not('#movie-btns, #popcorns').hide();

      $(this).siblings().removeClass('btn-active');
      $(this).addClass('btn-active');
    });

// This lines for set options on the date input on form
    $('#dates').datepicker({
      showAnim: "slideDown",
      defaultDate: new Date(2018,8 - 1,5),
      minDate: new Date(2018, 8 - 1, 5),
      maxDate: new Date(2018, 8 - 1, 8)
    })
    .on('keyup', function(){
      $('input#dates').val('Pick a date please');
    });
// This to init the tooltip on progress bars
    $('[data-toggle="tooltip"]').tooltip();



// ==================================
// Dont touch the code below this line
// });


// GOOGLE API
function initMap() {
        var boff = {lat: 40.702990, lng: -73.994923};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: boff
        });
        var marker = new google.maps.Marker({
          position: boff,
          map: map
        });
      };
