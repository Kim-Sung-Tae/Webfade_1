$(document).ready(function(){
    var count = 0;
    var classNm = "show"
    var total = $("#slider li").length;   // $("#slider li").size()   같은표현
  
  
    setInterval(function(){
      count++;
      count %= total;      // 0 ~ 2 
  
      $("#slider li").removeClass(classNm);
      $("#slider li").eq(count).addClass(classNm);
  
      // $("#slider li").eq(count).addClass(classNm).sibling().removeClass(classNm);
  
    }, 3000);
    
  
  })

  

  // style.css   abs 확인