$(document).ready(function(){
// Dont touch the code upon this line, it's just in case of move up the link to jquery library on the top on head tag



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
$(document).ready(window.scrollTo(0,0));

// This line to prevent Scroll clickin on the navbar items
$('body').addClass('stop-scrolling');

// This section to toggle class active from menu and add effects
// when change page hiding menu and fadein at bottom hiding the logo
$('.nav-item').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('#main-nav.navbar').hide().addClass('fixed-bottom').fadeIn(700);
  $('.navbar-brand').hide();
  $('.container-film, .film').addClass('film-color-2');
});
// ===========================================================

// This simply to return at home and back to top nav
// then fade in the logo
$('#home').on('click', function(){
  $('#main-nav.navbar').removeClass('fixed-bottom');
  $('.navbar-brand').fadeIn(1500);
  $('.container-film, .film').removeClass('film-color-2');
})
// ======================================================

// The next lines to hide the film effect from the menu when toggle to vertical menu
$("button.navbar-toggler").click(function(){
    var valore =  $(".navbar-toggler").attr("aria-expanded");

    if (valore == "false") {
      $("div.film").addClass('collapse');
    }else if(valore == "true"){
      $("div.film").removeClass('collapse');
    }

   });
// =========================================================
// ===================================

    // For Youtube Video on Modal
    // This could take the data-video attribute from button and the src too to post on the iframe on Bootstrap modal


    $(".video-modal").click(function () {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close, #trailer').on('click, hidden.bs.modal', function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });


// ==================================
// Dont touch the code below this line
});


// TODO: Manipulate the buttons on slides to show trailers or another content
// TODO: Try to sticky bottom the navbar but not on home
