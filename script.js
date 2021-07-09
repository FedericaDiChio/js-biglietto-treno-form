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
    
});


