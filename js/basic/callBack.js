// callback = function that is passed as an argument to another function
// used to handle asynchronous operations
// 1 - reading file
// 2 - network request
// 3 - animation
// 4 - interaction with database

function sum(callback , x ,y ){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(display , 10 , 20);
sum(displayPage , 10 , 20);
