//part 1 set the global variables
var startTime;
var level = 1; //level of difficulty
var beginnergMSG = "A sailer was swabbing the deck of a ship.";
var advancedMSG= "his axe hit his hand and he screamed ahhhh!";



//part 2 establish click events for the typing levels
function setup(){
    document.getElementById("beginner").onclick=
    function(){
        level=1;
    };

    document.getElementById("advanced").onclick=
    function(){
        level=2;
    };
}




//part 3: write the handler for startIt()

function startIt(){

    //clear out previous session
    var inputTxt = document.getElementById("typist_text");
    inputTxt.value="";
    var starImage= document.getElementById("star_img");
    starImage.src="img/blank.png";


    //get the start time
    var now = new Date();
    startTime=now.getTime();



    //create a message for the user to type
    if(level==1){
        msgType=beginnergMSG;
    }
    else{
        msgType=advancedMSG;
    }



    //display the test
    var textMsgText= document.getElementById("textMsgField");
    textMsgText.value = msgType;



    //clear out the previous game results

    document.getElementById("answer").innerHTML = "";



}




//part 4: write the handler for stopIt()

function stopIt() {

    var day = new Date();
    var endTime=day.getTime();
    var elapsedTime= (endTime-startTime)/1000;

    var typistTxt=document.getElementById("typist_text").value;
    var textMsgTxt= document.getElementById("textMsgField");


    var msg="";
    var starImage=document.getElementById("star_img");

    if(typist=="" || textMsgTxt.value==""){
        msg+= "You didnt type anything";
    }
    else if(typistTxt== textMsgTxt.value){
        msg+= "Good job, you time was " + elapsedTime + "<br>";
        starImage.src="img/thumbsUp.png";
    }
    else{
        msg+= "entered incorrectly. You shouldve typed " + textMsgTxt.value + ". You typed " + typistTxt + "<br>";
        starImage.src = "img/thumbsDown.png";
    }

    document.getElementById("answer").innerHTML=msg;



}
