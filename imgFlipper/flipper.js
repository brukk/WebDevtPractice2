$(document).ready(function(){

    $(".wrapper img:first").addClass("top");

    var flipper=function(){
        var current=$(".wrapper img.top");
        var next=current.next();

        if(!next.length){
            next=$(".wrapper img:first");
            next.addClass("top");
            current.removeClass("top");
        }else{
            next.addClass("top");
            current.removeClass("top");
        }
    } 
    setInterval(flipper,1000);
});