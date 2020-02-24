$(function(){
    // トップへスクロールボタン
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    //フォーム選択時にラベルの色も変更
    $('#name, #email,#message')
    .focusin(function(e) {
      $(this).css('background-color', '#ffc');
    })
    .focusout(function(e) {
      $(this).css('background-color', '#fff');
    });
    
    //skill欄をタブパネル化




});