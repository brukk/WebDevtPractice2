$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(success,error);

    function success(pos){
        var lat=pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat,long);
    }

    function error(){
        alert("there was an error loding");
    }

    function weather(lat,long){
        var URL= `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        // var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=b194675a8bea86c6f8239d798f9d345b`

       
        $.getJSON(URL,function(data){
            console.log(data);
            updateDom(data);
            
        });        
    }

    function updateDom(data){
        var city=data.name;
        var temp=Math.round(data.main.temp_max);
        // var temp=Math.round(data.main.temp_max-273.15);
        var desc=data.weather[0].description;
        var icon=data.weather[0].icon;

        $("#city").html(city);
        $("#temp").html(temp);
        $("#desc").html(desc);
        $("#icon").attr("src",icon);
    }
});