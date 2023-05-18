// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow");
  });
  $(document).ready(function () {
    $(".btn-showpass").click(function (e) {
      e.preventDefault();
      if ($(this).siblings("input").attr("type") == "password") {
        $(this).siblings('input[type="password"]').attr("type", "text");
      } else {
        $(this).siblings('input[type="text"]').attr("type", "password");
      }
      $(this).find("i").toggleClass("bi-eye");
      $(this).find("i").toggleClass("bi-eye-slash");
    });
  });
  $(document).mouseup(function (e) {});
  window.addEventListener("mouseover", function (e) {
    var container = $("name");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      //code here
    }
  });
  window.addEventListener("load", function () {});
})(window.jQuery);
