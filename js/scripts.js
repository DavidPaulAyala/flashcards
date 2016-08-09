
$(document).ready(function() {
  $(".thumbnail").click(function() {
    $(this).find("p").toggleClass("terms")
    $(this).find("p").toggleClass("definitions")
  });
});
