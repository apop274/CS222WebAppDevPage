

function paceCalculate() {
    
    var distance = parseFloat(document.getElementById("distance").value); 
    var pace = document.getElementById("pace").value;

    
    var paceArr = pace.split(":");
    var paceMinutes = parseInt(paceArr[0], 10); 
    var paceSeconds = parseInt(paceArr[1], 10); 

   
    var totalPaceSeconds = (paceMinutes * 60) + paceSeconds;

    
    document.getElementById("paceTable").innerHTML = "";

  
    var accumulatedSeconds = 0;

  
    for (let i = 1; i <= Math.floor(distance); i++) {
        accumulatedSeconds += totalPaceSeconds;

      
        var hours = Math.floor(accumulatedSeconds / 3600);
        var minutes = Math.floor((accumulatedSeconds % 3600) / 60);
        var seconds = accumulatedSeconds % 60;

        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       
        var row = "<tr><td>" + i + "</td><td>" + hours + ":" + minutes + ":" + seconds + "</td></tr>";
        document.getElementById("paceTable").innerHTML += row;
    }

    //handle the partial mile if there is any
    var fractionalMile = distance % 1;
    if (fractionalMile > 0) {
        accumulatedSeconds += totalPaceSeconds * fractionalMile;

       
        var hours = Math.floor(accumulatedSeconds / 3600);
        var minutes = Math.floor((accumulatedSeconds % 3600) / 60);
        var seconds = accumulatedSeconds % 60;

        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //partial mile to the table
        var row = "<tr><td>" + distance.toFixed(1) + "</td><td>" + hours + ":" + minutes + ":" + seconds + "</td></tr>";
        document.getElementById("paceTable").innerHTML += row;
    }
}
