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
});
