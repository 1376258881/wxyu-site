$(function () {
  $('.wx_block').click(function () {
    $('.mask').show();
    $('.wx_img').show();
  });
  $('.mask').on('click', function () {
    $('.mask').hide();
    $('.wx_img').hide();
  });
});
