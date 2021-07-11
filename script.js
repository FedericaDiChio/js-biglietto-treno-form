// USER DATA
var userName = document.getElementById("name");
var userKms = document.getElementById("kms");
var userAge = document.getElementById("age");

// HTML ELEMENT
var ticketName = document.getElementById("passenger-name");
var ticketLastname = document.getElementById("passenger-lastname")
var ticketDiscount = document.getElementById("discount");
var ticketCarTrain = document.getElementById("car-train");
var ticketCodeTrain = document.getElementById("code-train");
var ticketPrice = document.getElementById("ticket-price");


// COLLECT DATA FROM USER
var button = document.getElementById("button");
button.addEventListener("click", function (){
    userName.value;
    userKms.value;
    userAge.value;
    
    // CALCULATE DISCOUNT
    var ticket = userKms.value * 0.21;
    var displayDiscount = "Tariffa ordinaria;"
    
    if (userAge.value === "underage") {
        ticket *= 0.8;
        displayDiscount = "Sconto del 20% per Minorenni;"
       
    }

    else if (userAge.value === "senior65") {
        ticket *= 0.6;
        displayDiscount = "Sconto del 40% per Over65;"
        
    }

    // print the price with two decimals
    ticket = "Euro" + ticket.toFixed(2);
 
    // randomize car train number 
    var carTrainNumber = Math.floor(Math.random() *12)+1

    // randomize code train number 
    var codeTrainNumber = Math.floor(Math.random()*(100000 - 9999)) + 9999;

    // PRINT IN PAGE 
    ticketName.innerHTML = userName.value;
    ticketDiscount.innerHTML = displayDiscount; 
    ticketCarTrain.innerHTML = carTrainNumber;
    ticketCodeTrain.innerHTML = codeTrainNumber;
    ticketPrice.innerHTML = ticket;

});

//* TO DO - parte css; Display-none biglietto; 