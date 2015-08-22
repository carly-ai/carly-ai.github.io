$(document).ready(function() {

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 30) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Load YouTube video on the homepage.
  $(document).on('click','#video',function(e) {

    // Log the click to Google Analytics.
    ga('send', 'event', 'homepage', 'click', 'show video');

    // Scroll to the video section.
    $('html, body').animate({
      scrollTop : 420},
      500
    );

    // Start the show.
    startShow();
  });

  // Close video if anywhere in the header is clicked.
  $(document).on('click','#close, .video-container, .homepage.showtime #overlay, .homepage.showtime #message',function(e) {

    // Close the show.
    closeShow();
  });

  // If mobile device, start the show without overlay.
  if ($(window).width() <= 768) {
    $('#buttons').clone().appendTo('.video-container').css('padding-top', '30px');
    $('#buttons').hide();

    // Start the show.
    startShow();

    // Hide overlay div and close button.
    $('#overlay, #close').hide();
  }

  // Blog background image blur.
  // $('body.post').blurjs({
  //   source: 'body',
  //   radius: 7,
  //   overlay: 'rgba(255,255,255,0.4)'
  // });

});

// Start the show. This is exciting :-)
function startShow() {
  // Set the YouTube URL.
  var url = "http://www.youtube.com/embed/jJOhi-RfQmg?rel=0&amp;showinfo=0&amp;hd=1&amp;autoplay=1&amp;wmode=transparent";

  // Show the video container.
  $('.video-container').css('display','block');

  // Set dimension of the overlay and fade in overlay.
  setDimensions('#overlay');
  $('#overlay').fadeIn(700);

  // Load the YouTube video.
  $('.video-container #youtube').attr("src",url);

  // Add a  showtime class.
  $('body').addClass('showtime');

}

// Close the show. Why Willy Why?
function closeShow() {
  // Hide the video container and remove the YouTube video.
  $('.video-container').hide();
  $('.video-container #youtube').attr("src","");

  // Show the video placeholder.
  $('#video').show();

  // Fade out the background.
  $('#overlay').fadeOut(700);

  // Remove showtime class.
  $('body').removeClass('showtime');

  // Scroll to the top of the page.
  $('html, body').animate({scrollTop : 0},500);
}

// Get header dimensions.
function setDimensions(e) {
  var header_container_id = ".homepage #header-container"
  var width = $(header_container_id).width();
  var height = $(header_container_id).height();

  $(e).width(width).height(height);
}
