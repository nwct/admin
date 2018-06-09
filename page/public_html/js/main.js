$(function(){
   reset_layout(); 
});

$(window).resize(function () {
    reset_layout();
});

$(".nva-btn").on("click", function () {
    var $width = $("#admin_left").width();
    if ($width > 50) {// 收起操作
        admin_left_collapse();
    } else {// 展开操作
        admin_left_expand();
    }
});

// 收起操作
function admin_left_collapse() {
    
    $("#admin_left").animate({'min-width': '50px'}, 500);
    $("#admin_main").animate({'margin-left': '50px'}, 500);
    $(".brand_title").hide(1000);
    $(".user-panel").hide(1000);

}

// 展开操作
function admin_left_expand() {
    
    $("#admin_left").animate({'min-width': '220px'}, 500);
    $("#admin_main").animate({'margin-left': '220px'}, 500);
    $(".brand_title").show(1000);
    $(".user-panel").show(1000);
}

function reset_layout() {
    if ($(this).width() < 767) {
        admin_left_collapse();
    }
}