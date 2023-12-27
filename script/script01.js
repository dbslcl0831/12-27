$(function(){
    $(".main > li, .img_area").mouseenter(function(){
        $(".sub, .img_area").stop().slideDown();
    })//mouse enter

    $(".main > li, .img_area").mouseleave(function(){
        $(".sub, .img_area").stop().slideUp();
    })//mouse leave

    $(".main > li").mouseenter(function(){
        var n =$(this).index();
        console.log("n:",n)
        $(".img_area .icons li").hide();
        $(".img_area .icons li").eq(n).show();
    })
})//j