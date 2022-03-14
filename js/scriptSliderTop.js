$(document).ready(function(){
     
  
    var classNm = "show";
    var count = 0; // 방향
  
  
    setInterval(function(){
      
  
      $("slider ul").sibling();
  
      $("#slider ul").animate({"marginTop" : dir*px},400, function(){
        $(this).find("li").eq(0).appendTo($(this));
        $(this).css("margin-Top",0);
      });
    },3000);
  
  
  })
  
  // style.css   abs 제거 확인