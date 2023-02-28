$(document).ready(function () {
  $(".n").click(function () {
    $(".content1").toggle(200);
    $(".content2").toggle(600);
    $(".a1").toggleClass("disabled");
    $(".a2").toggleClass("disabled");
  });
  $(".p").click(function () {
    $(".content1").toggle(200);
    $(".content2").toggle(600);
    $(".a1").toggleClass("disabled");
    $(".a2").toggleClass("disabled");
  });
});
