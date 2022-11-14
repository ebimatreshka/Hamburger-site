//ハンバーガーボタン　クリックしたら黒の透過とsidebar表示
$(function () {
  $(".p-header__title--menu").on("click", function () {
    $(".l-container__black").toggleClass("is-open");
    $(".l-sidebar").toggleClass("is-open");
    $(".l-body").toggleClass("is-open");
  })
})