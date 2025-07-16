
// function declaration = define a reusable block of code that performs a specific task
function sayHello() {
        console.log("Hello, world!");
    }
    
// function expression = function defined as a values or variables

// as a variable
const hello = function() {
        console.log("Hello, world!");
    }

hello();

// as a value
setTimeout(hello, 1000);


const nums = [1,2,3,4,5];


const squaredNums = nums.map(function(element){
    return Math.pow(element , 2);
});
console.log(squaredNums);


const oddNums = nums.filter( (a) => a%2 !== 0);

console.log(oddNums);
