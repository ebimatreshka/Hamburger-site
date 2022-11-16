//ハンバーガーボタン　クリックしたら黒の透過とsidebar表示
$(function () {
  //menuをクリックしたら
  $(".p-header__title--menu").on("click", function () {
    //黒透過幕が出てくる
    $(".l-container__black").toggleClass("is-open");
    //sidebarが出てくる
    $(".l-sidebar").toggleClass("is-open");
    //bodyのposition: fixed;を有効にする
    $(".l-body").toggleClass("is-open");
  })
})