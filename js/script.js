$(document).ready(function(){
       // #slider 의 width 값을 가져와라.
  const px = $("#slider").width(); //  1200px
  const dir = -1;  // 방향
  //json 포맷에서는 키는 절대 변수로 사용 불가
// aniamte (첫인자:json , )

  setInterval(function(){
    
    $("#slider ul").animate({"marginLeft" : dir*px,},400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-left",0);
    });
  },3000);


})