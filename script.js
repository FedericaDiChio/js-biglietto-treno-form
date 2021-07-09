// 1. Variables
var userName = document.getElementById("name");
var userLastname = document.getElementById("lastname")
var userKms = document.getElementById("kms");
var userAge = document.getElementById("age");


// 2. Collect data from user 
var button = document.getElementById("button");
button.addEventListener("click", function (){
    userName.value;
    userLastname.value;
    userKms.value;
    userAge.value;

    console.log(userName.value);
    console.log(userLastname.value);
    console.log(userKms.value);
    console.log(userAge.value);
    
    var ticket = userKms.value * 0.21;
    
    if (userAge.value === "underage") {
        ticket *= 0.8;
        console.log(ticket)
    }

    else if (userAge.value === "senior65") {
        ticket *= 0.6;
        console.log(ticket)
    }
});




