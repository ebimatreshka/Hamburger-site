//ハンバーガーボタン
$(".p-header__title--menu").on("click", function () {
    $(this).toggleClass("is-open");
    $(".l-sidebar").toggleClass("is-open");
  });
  