
jQuery(function ($) {

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 100;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // ハンバーガーメニュー
  $(document).ready(function(){
    $('.js-hamburger').click(function(){
      $('.js-hamburger').toggleClass('is-active');
      $('.js-nav').slideToggle();
    });

    // アンカーリンクがクリックされたときの処理
    $('.js-nav a').click(function(){
      // メニューを閉じる
      $('.js-hamburger').removeClass('is-active');

      if(window.innerWidth <= 767) {
        $('.js-nav').slideUp();
      }

      // ヘッダーの高さを取得
      var headerHeight = $('header').outerHeight(); // 'header'は実際のセレクタに置き換えてください

      // リンク先に遷移
      var target = $(this).attr('href');
      // ヘッダーの高さを考慮してスクロール位置を調整
      $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
      }, 800); // スクロールの速さを調整する場合は、数値を変更
      return false; // デフォルトのリンク挙動をキャンセル
    });
  });


});
