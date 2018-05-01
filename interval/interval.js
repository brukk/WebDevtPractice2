var counter=0;
var myIntID=setInterval(function(){
    console.log("LFC win in Rome");
    
    counter+=1;
    if(counter==6){
        clearInterval(myIntID);
    }
},500);

setTimeout(function(){
    console.log("boom");
},3000)



