// destructuring = process of unpacking values from arrays, or properties from objects, into distinct variables
// [] = array
// {} = object

// example 1
let a = 1 ;
let b = 2 ;

[a,b] = [b,a];
console.log(a,b); // 2 1

// example 2
const colors = ["red" , "green" , "blue" , "yellow" , "black"];

[colors[0] , colors[3]] = [colors[3] , colors[0]];
console.log(colors); // yellow , red , blue , green , black

// example 3
const [first , second , third , ...rest] = colors;
console.log(first , second , third , rest);  // yellow , red , blue , [green , black]


// for object example1
const person = {
        name: "John Doe",
        age: 30,
        email: "iVd0m@example.com"
    };
    
    const { name , age , email } = person;
    
    console.log(name); // "John Doe"
    console.log(age); // 30
    console.log(email); // "iVd0m@example.com" 