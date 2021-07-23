$(function(){

    $("div#maultitabArea>div").click(function(){
        $("div#maultitabArea>div").removeClass(".selected");
        $(this).addClass(".selected");
    });

});