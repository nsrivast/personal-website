$(document).ready(function () {
  $(".hot").hover(
    function () {
      $(".content").mark(this.getAttribute("data-keyword"));
    },
    function () {
      $(".content").unmark();
    }
  );

  $(".arrow").on("click", function (event) {
    $(this).find("img").toggleClass("rotate");
    $(this).find("img").toggleClass("rotate-reset");
    $(".detail").toggle(500);
  });
});
