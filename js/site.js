var url = window.location.href;
try {
  var hash = url.substring(url.indexOf('#') + 1);
  if (hash.length) {
    console.log(hash);
    var content = $('#' + hash + '-content').slideDown(200);
  }
} catch (err) {}

$('.level-toggle').click(function() {
  $('.level-content').slideUp(200);
  $(this).closest('.level').find('.level-content').slideToggle(200);
  $('map').imageMapResize();
});


$('area').on('click touchstart', function() {
  var name = $(this).attr('name');

  $('#overlay').fadeIn(300);
  if (name === "level1-store") {
    $('#level1-popup-store').fadeIn(300);
  } else if (name === "level1-cafe") {
    $('#level1-popup-cafe').fadeIn(300);
    $(window).trigger('resize');
  }
});

$('#overlay').click(function() {
  $('.popup').fadeOut(300);
  $('#overlay').fadeOut(300);
});
