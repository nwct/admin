$(function () {
    $("#admin_left").css({'width': '220px'});
    $.sidebarMenu($('.sidebar-menu'));
    reset_layout();
    resetFooter();
     $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

$(window).resize(function () {
    reset_layout();
    resetFooter();
});

$(".nva-btn").on("click", function () {
    var $width = $("#admin_left").width();
    if ($width > 0) {// 收起操作
        admin_left_collapse();
    } else {// 展开操作
        admin_left_expand();
    }
});

// 收起操作
function admin_left_collapse() {
    $("#admin_left").css({'width': '0px'});
    $("#admin_main").css({'margin-left': '0px'});
}

// 展开操作
function admin_left_expand() {
    $("#admin_left").css({'width': '220px'});
    $("#admin_main").css({'margin-left': '220px'});
}

function reset_layout() {
    if ($(this).width() < 767) {
        admin_left_collapse();
    } else {
        admin_left_expand();
    }
}

$.sidebarMenu = function (menu) {
    var animationSpeed = 300,
            subMenuSelector = '.sidebar-submenu';

    $(menu).on('click', 'li a', function (e) {
        var $this = $(this);
        var checkElement = $this.next();

        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
        }

        //If the menu is not visible
        else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
            //Get the parent menu
            var parent = $this.parents('ul').first();
            //Close all open menus within the parent
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            //Remove the menu-open class from the parent
            ul.removeClass('menu-open');
            //Get the parent li
            var parent_li = $this.parent("li");

            //Open the target menu and add the menu-open class
            checkElement.slideDown(animationSpeed, function () {
                //Add the class active to the parent li
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
        }
        //if this isn't a link, prevent the page from being redirected
        if (checkElement.is(subMenuSelector)) {
            e.preventDefault();
        }
    });
};


function resetFooter() {
    var mainHeight = $('#admin_main').innerHeight();
    var windowHeight = $(window).height();
    if (mainHeight > windowHeight) {
        $(".footer").css({"position": "absolute", "bottom": "-50px"});
    } else {
        $(".footer").css({"position": "fixed", "bottom": "0px"});
    }
}
