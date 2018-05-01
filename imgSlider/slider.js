$(document).ready(function(){
    $(".slider-inner img:first").addClass("active");


    $(".next").on("click", function(){
        var currentImg=$(".active");
        var nextImg=currentImg.next();

        if(!nextImg.length){
            nextImg=$(".slider-inner img:first");
            nextImg.addClass("active");
            currentImg.removeClass("active");
            
        }else{
            nextImg.addClass("active");
            currentImg.removeClass("active");
        }
    });


    $(".prev").on("click", function(){
        var currentImg=$(".active");
        var prevImg=currentImg.prev();

        if(!prevImg.length){
            prevImg=$(".slider-inner img:last");
           
            currentImg.removeClass("active");
            prevImg.addClass("active");
        }else{
            prevImg.addClass("active");
            currentImg.removeClass("active");
        }   
    });




});