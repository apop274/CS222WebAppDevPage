function paceCalculate() {

var hours = 0;
var minutes = 0;
var seconds = 0;
var extraMin = 0;
var newMin = 0;
var newSec = 0;
 

var distance = document.getElementById("distance").value;
var pace = document.getElementById("pace").value;

let paceArr=pace.split(":");

var min = paceArr[0];
var sec = paceArr[1];

for(let i=1; i<= distance; ++i){

    newMin= min*i;
    newSec = sec*i;

    if(newMin >= 60){
        hours = Math.trunc(newMin/60);
        extraMin = newMin%60;
    }

    if(newSec>=60){
        minutes = Math.trunc(newSec/60);
        seconds = newSec%60;
    } 

    if(newSec<60){
        seconds = newSec;
    }

    if(newMin<60){
        minutes=newMin;
    }

    
    document.write(i + "    " + hours + ":" + (minutes+extraMin) + ":" + seconds + "<br>");
    
}


}
    