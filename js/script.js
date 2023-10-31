$(function () {
  //スクロールエフェクト
  function fadeUpEffect() {
    $(".fadeUpEffect").each(function () {
      var elemPos = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp");
      }
    });
  }
  $(window).scroll(function () {
    fadeUpEffect();
  });

  //FAQのアコーディオン
  $(".accordion__question").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });

  //ページトップへ戻る
  var $pageTop = $(".page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      200
    );
    return false;
  });

  //スクロールに応じてヘッダーにactiveクラスを付与
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header").addClass("header--active");
    } else {
      $(".header").removeClass("header--active");
    }
  });
});
