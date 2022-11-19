//ハンバーガーメニュー
$(function () {
  $(".p-header__title--menu").click(function () {
    $(this).toggleClass("is-active");
    $(".l-container__black").toggleClass("is-active"); //黒幕にis-activeをつける(表示)
    $(".l-sidebar").toggleClass("is-open"); //sidebarにis-openをつける(表示)
  });

  $(".p-nav__hamburger-btn-wrapper").click(function () {
    $(".p-header__title--menu").removeClass("is-active");
  })
})


// $(".p-header__title--menu").click(function () { //ハンバーガーボタンをクリックしたら
//   $(this).toggleClass("active"); //それ自身にactiveをつけて
//   $(".l-sidebar").toggleClass("active"); //navにもactiveをつける
//   $(".l-container__black").toggleClass("active")
// });



//ハンバーガーボタン　クリックしたら黒の透過とsidebar表示
  //menuをクリックしたら
  // $(".p-header__title--menu").on("click", function () {
  //   //sidebarが出てくる
  //   $(".l-sidebar").toggleClass("is-active");
  //   //bodyのposition: fixed;を有効にする
  //   $(".l-body").toggleClass("is-active");
  //   //黒透過幕が出てくる
  //   $(".l-container__black").toggleClass("is-open");
  // });


  $(".nav__hamburger-btn-wrapper--btn a").on("click",function () {
    // $(".p-header__title--menu").removeClass("is-active")
    // $(".l-sidebar").removeClass("is-active");
    $(".l-container__black").removeClass("is-open");
  });

  // $(".l-body").on("click",function () {
  //   $(this).removeClass("nav-open")
  //   $(".p-header__title--menu").removeClass("is_active");
  //   $(".l-sidebar").removeClass("is-active");
  // });
