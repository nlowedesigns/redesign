$(document).ready(function(){
// page position
    $("#home").click(function() {
        $("html, body").animate({
            scrollTop: $("#home_container").offset().top
        }, 1000)
    });
    $("#about").click(function() {
        $("html, body").animate({
            scrollTop: $("#about_container").offset().top
        }, 1000)
    });
    $("#resume").click(function() {
        $("html, body").animate({
            scrollTop: $("#resume_container").offset().top
        }, 1000)
    });
    $("#portfolio").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio_container").offset().top
        }, 1000)
    });
// landscape vs portrait
    $(window).on("resize load", function() {
        var height = $(window).height();
        var width = $(window).width();
        if (width > height) {
            //run landscape script
            $("#initials_container").click(function() {
                $("#brand").show();
                $("#brand").css("z-index", "12");
                $("#drive").trigger("play");
            });

            $("#initials_container").hover(function(){
                $(".initials").addClass("hover_initials");
                $("#home_container").css("background-color", "black");
            }, function() {
                $(".initials").removeClass("hover_initials");
                $("#home_container").css("background-color", "lightblue");
            }, function() {

            });

        } else {
            //run portrait script
        };
    }); 

// brand video
    $("video").on("ended",function(){
        $("#brand").hide();
        $("#brand").css("z-index", "10");
    });

    $("video").click(function() {
        $("#brand").hide();
        $("#brand").css("z-index", "10");
    });

    $("#my_story").click(function() {
        $("#drive").show();
        $("#drive").css("z-index", "12");
    });
    $("#drive").click(function() {
        $(this).hide();
        $("#drive").css("z-index", "10");
    });

// navigation
    $("#chevron_container").hover(function(){
        $("#chevron").css({
            "-moz-animation-name":"rotatebox",
            "-moz-animation-duration":"0.5s",
            "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"forwards",

            "-webkit-animation-name":"rotatebox",
            "-webkit-animation-duration":"0.5s",
            "-webkit-animation-iteration-count":"1",
            "-webkit-animation-fill-mode" : "forwards",
        });
        $("#chevron").css("left", "12.5%");
    }, function() {
        $("#chevron").css({
            "-moz-animation-name":"rotatebox",
            "-moz-animation-duration":"0.5s",
            "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"backwards",

            "-webkit-animation-name":"rotatebox",
            "-webkit-animation-duration":"0.5s",
            "-webkit-animation-iteration-count":"1",
            "-webkit-animation-fill-mode" : "backwards",
        });
        $("#chevron").css("left", "50%");
    });

    $(".nav").click(function() {
        $("#nav_menu").animate({
            bottom: -400
        });
    });

// portfolio
    $(".carousel_nav").click(function() {
        $(".carousel_nav").css("opacity", "1");
        $(this).css("opacity", ".6");
    });

    $(".carousel_nav:nth-child(3)").click(function() {
        $(".carousel").css("left", "0");
    });
    $(".carousel_nav:nth-child(4)").click(function() {
        $(".carousel").css("left", "-66vw");
    });
    $(".carousel_nav:nth-child(5)").click(function() {
        $(".carousel").css("left", "-132vw");
    });
    $(".carousel_nav:nth-child(6)").click(function() {
        $(".carousel").css("left", "-198vw");
    });
    $(".carousel_nav:nth-child(7)").click(function() {
        $(".carousel").css("left", "-264vw");
    });
    $(".carousel_nav:nth-child(8)").click(function() {
        $(".carousel").css("left", "-330vw");
    });
    $(".carousel_nav:nth-child(9)").click(function() {
        $(".carousel").css("left", "-396vw");
    });

    $(".tab").click(function() {
        $(this).hide("slow");
        $(this).siblings(".tab").show("slow");
    });
    $("#camera").click(function() {
        $("#illustrations").hide("slow");
        $("#photography").show("slow");
        $(".carousel_nav:nth-child(9)").hide("slow");
        $(".carousel_nav:nth-child(8)").hide("slow");
        $(".carousel_nav:nth-child(7)").hide("slow");
        $(".carousel_nav:nth-child(6)").hide("slow");
        $("#carousel_nav_container").css("width", "14vw");
        $(".carousel").css("left", "0");
    });
    $("#pen").click(function() {
        $("#photography").hide("slow");
        $("#illustrations").show("slow");
        $(".carousel_nav:nth-child(9)").show("slow");
        $(".carousel_nav:nth-child(8)").show("slow");
        $(".carousel_nav:nth-child(7)").show("slow");
        $(".carousel_nav:nth-child(6)").show("slow");
        $("#carousel_nav_container").css("width", "24vw");
    });

    $("#chevron_container").click(function() {
        var clicks = $(this).data("clicks");
            if (clicks) {
                // even clicks
                $("#nav_menu").animate({
                    bottom: -400
                })
            } else {
              // odd clicks
                $("#nav_menu").animate({
                    bottom: 0
                });
               }
       $("#chevron_container").data("clicks", !clicks);
    });

    $("#resume_container").hover(function(){
        $("#title").delay(4000).animate({
            opacity: 0,
        }, 1500);
    });

    $(".icon").hover(function(){
        $(this).css("opacity", ".6");
        $(this).addClass("button_hover");
    }, function() {
        $(this).css("opacity", "1");
        $(this).removeClass("button_hover");
    });

     $(".button").hover(function(){
        $(this).css("opacity", ".6");
        $(this).addClass("button_hover");
    }, function() {
        $(this).css("opacity", "1");
        $(this).removeClass("button_hover");
    });

    var thumbnail =$(".thumbnail");
    thumbnail.click(function(){
        $("#overlay_container").show();
        $("#carousel_view").css("overflow", "visible");
        $(this).siblings().addClass("pic_click");
        $(this).siblings().show();
        return false;
    });

    $("#overlay, #x").click(function(){
        $("#overlay_container").hide();
        $(".square", ".photo_container").hide();
        $(".photo", ".photo_container").hide();
        $(".tall_photo", ".photo_container").hide();
        $("#carousel_view").css("overflow", "hidden");
        return false;
    });
});