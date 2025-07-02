let userName = "";

while (userName === "" || userName === null) { // null if user press cancel
    userName = prompt("Please enter your name");
}

console.log("Hello " + userName); 

let loggedIn = false;
let Username ;
let Password;


do{ // عشان حتى لو true يخش الاول مره عالاقل
    Username = prompt("Enter your username");
    Password = prompt("Enter your password");
    if(Username === "admin" && Password === "1234"){
        loggedIn = true;
    } else{
        alert("Wrong username or password");
    }
}while(!loggedIn)