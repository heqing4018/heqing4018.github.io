


$(function() {

  // 加载头部
  $('.navbar').load('header.html');

  // initNav();

  // 加载脚部
  $('#footLoader').load('footer.html');


  function e() {
      var e = $(window).scrollTop() > 420;
      e !== t && (t = e,t ? $(".menu_block").addClass("fixed") : $(".menu_block").removeClass("fixed"))
  }
  var t;
  e();
  $(document).on("scroll", function() {e()});


  

})

// 产品、解决方案页面，菜单点击效果
$('.menu_block').on('click', 'a',function(){
  $(this).closest('.menu_block').find('a').removeClass('curmn');
  $(this).addClass('curmn');
});

function initNav(){

  var index = $('.navbar').attr('my-index');
  
  console.log(index);
  // console.log($('#navbar').find('li').eq($('.navbar').attr('my-index')));

  var lis = $('#navbar', '.navbar').find('li');

  console.log(lis);
}