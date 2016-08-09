
$(document).ready(function() {
  $(".thumbnail").hover(function() {
    $(this).find("p").toggleClass("terms")
    $(this).find("p").toggleClass("definitions")
  });
});
