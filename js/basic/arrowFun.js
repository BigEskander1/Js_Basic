// arrow function = a concise way to write function expressions
// good for simple function that you use once 
// (parameters) => expression

const hello = (name) =>  console.log("Hello, " + name);


hello("fady");

const nums = [1,2,3,4,5];
const maxNum = nums.reduce( (a, b) => Math.max(a,b));
console.log(maxNum);


const add = (...nums) => nums.reduce((a, b) => a + b);
console.log(add(1,2,3,4,5));