$(function(){
    //スムーズなクスクロール

    // トップへスクロール






    //ページ最終更新日の表示

    //フォーム選択時にラベルの色を変更→フォーム入力時に、今どの項目を選択しているのかがわかりやすくなる
    $('#name, #email,#message')
    .focusin(function(e) {
      $(this).css('background-color', '#ffc');
    })
    .focusout(function(e) {
      $(this).css('background-color', '#fff');
    });

    //about欄にスライドパネルをつけて項目別に分ける



    //skill欄をタブパネル化




});