//THERE ARE THREE LEVELS TO THIS GAME
// LEVEL 1: USER MAKES THEIR FIRST CHOICE
// LEVEL 2: A DOOR IS REMOVED AND THE USER SELECTS AGAIN
// LEVEL 3: THE GAME IS OVER. USER CAN START AGAIN

var gameState = 'LEVEL1';

//GAME VARIABLES
var prizeDoor;
var userSelected;
var doorRemoved;

//GAME IS INITIALIZED AT LEVEL 1.
function initialize() {
    gameState = 'LEVEL1';
    prizeDoor = Math.floor(Math.random() * 3) + 1;
    document.getElementById("status").innerHTML = "<br>Please pick a door.<br><br><br><br>";
}

//USER MAKES A SELECTION IN LEVEL 1 AND LEVEL 2. WHEN USER CLICKS IN LEVEL 3
//THE GAME IS INITIALIZED.
function choseDoor(clickedCell) {
    if (gameState == 'LEVEL1') {
        userSelected = clickedCell;
        moveLevel2();
        gameState = 'LEVEL2';
    }
    else if (gameState == 'LEVEL2') {
        if (clickedCell == doorRemoved) {
            alert("You selected a removed door. Select from the two available.")
        }
        else if (clickedCell == prizeDoor) {
            var instruction = "<br>Congratulations, you win a fabulous car!!<br><br>";
            document.images[prizeDoor - 1].src = "media/car.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
        else if (clickedCell != prizeDoor) {
            var instruction = "<br>Sorry, you lost the car. <br><br>";
            document.images[clickedCell - 1].src = "media/mhlostCar.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
    }
    else if (gameState == 'LEVEL3') {
        document.images[0].src = "media/door1.png";
        document.images[1].src = "media/door2.png";
        document.images[2].src = "media/door3.png";
        initialize();
    }
}

//LEVEL 2 INVOLVES A DOOR REMOVED
function moveLevel2() {
    //task 1: remove a door
    removeDoor();

    document.images[doorRemoved - 1].src = "media/noDoor.png";
    var instruction = "<br>You selected door " + userSelected;
    instruction += "<br>Door " + doorRemoved + " does not have the car and has been removed. ";
    instruction += "<br>Would you like to stay with your original door? <br>Choose one of the two doors available.<br>";
    document.getElementById("status").innerHTML = instruction;
}

//REMOVE DOOR REQUIRES EVALUATION OF MULTIPLE SCENARIOS.
function removeDoor() {
    if (userSelected == 1) {
        if (prizeDoor == 1) {
            doorRemoved = 2;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 2;
        }
    }
    else if (userSelected == 2) {
        if (prizeDoor == 1) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 1;
        }
    }
    else if (userSelected == 3) {
        if (prizeDoor == 1) {
            doorRemoved = 2;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 1;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 2;
        }
    }
}