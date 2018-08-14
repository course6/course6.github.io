$(function () {
var $body = $('body');

//開閉用ボタンをクリックでクラスの切替え
$('#menu__btn').on('click', function (e) {
  if ($body.hasClass('open')) {
    $body.removeClass('open');
  }else{
    $body.addClass('open');
  }
});

// メニュー名以外の部分をクリックで閉じる
$('#menu__nav').on('click', function () {
  $body.removeClass('open');
});
});
