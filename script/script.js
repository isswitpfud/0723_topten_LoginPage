$(function(){

    $("div#multitabArea>div").click(function(){
        $("div#multitabArea>div").removeClass("selected");
        $(this).addClass("selected");
    });

});