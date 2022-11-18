//headerのmenuをクリックしたらsidebarが出てくる
$(".p-header__title--menu").click(function () { //ハンバーガーボタンをクリックしたら
  $(this).toggleClass("active"); //それ自身にactiveをつけて
  $(".l-sidebar").toggleClass("active"); //navにもactiveをつける
});



// //ハンバーガーボタン　クリックしたら黒の透過とsidebar表示
// $(function () {
//   //menuをクリックしたら
//   $(".p-header__title--menu").on("click", function () {
//     //sidebarが出てくる
//     $(".l-sidebar").toggleClass("is_active");
//     //bodyのposition: fixed;を有効にする
//     $(".l-body").toggleClass("is_active");
//     //黒透過幕が出てくる
//     $(".l-container__black").toggleClass("is-open");
//   });


//   $(".nav__hamburger-btn-wrapper--btn a").on("click",function () {
//     // $(".p-header__title--menu").removeClass("is_active")
//     // $(".l-sidebar").removeClass("is-active");
//     $(".l-container__black").removeClass("is-open");
//   });

  // $(".l-body").on("click",function () {
  //   $(this).removeClass("nav-open")
  //   $(".p-header__title--menu").removeClass("is_active");
  //   $(".l-sidebar").removeClass("is-active");
  // });
