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

  $('#select-day')
    .focusout(function(e) {
      let SelectDay = new Date($(this).val()).getDay();
      // console.log(SelectDay);
      if (!SelectDay || SelectDay == 6 || SelectDay == 0) {
        if ($(this).next().length == 0) {
          $(this).after('<span class="text-red">平日を入力してください</span>')
        }
      }else{
        $(this).next().remove();
      }
    });
});
