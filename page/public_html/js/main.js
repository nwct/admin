
$(".nva-btn").on("click",function(){
    var $width=$("#admin_left").width();
    if($width>50){
        // 收起操作
        //alert("收起操作");
        admin_left_collapse();
    }else{
       // 展开操作
      // alert("展开操作");
      admin_left_expand();
    }
});

// 收起操作
function admin_left_collapse(){
   // $("#admin_left").css({'min-width':'50px'});
   // $("#admin_main").css({'margin-left':'50px'});
           $("#admin_left").animate({'min-width':'50px'},500);
           $("#admin_main").animate({'margin-left':'50px'},500);
}

// 展开操作
function admin_left_expand(){
  //  $("#admin_left").css({'min-width':'220px'});
  //  $("#admin_main").css({'margin-left':'220px'});
     $("#admin_left").animate({'min-width':'220px'},500);
           $("#admin_main").animate({'margin-left':'220px'},500);
}
