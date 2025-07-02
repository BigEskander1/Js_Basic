// spread operator = ... allow us to expand an array or object into individual elements


let nums = [1,2,3,4,5];
let max = Math.max(...nums);
let min = Math.min(...nums);

console.log(max);
console.log(min);

console.log(...nums);



const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(...merged); // [1, 2, 3, 4]


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged2 = { ...obj1, ...obj2 };
console.log(merged2); // { a: 1, b: 3, c: 4 }


let username = "BigEskander";

let username2 = [...username];
console.log(...username2);
