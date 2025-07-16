// forEach = method used to loop through an array and execute a function for each element in the array
let nums = [1,2,3,4,5];
// nums.forEach((num , index) => {
//     console.log(num);
//     console.log(index);
// });



function display(num){
    console.log(num);
}

function double(element , index , array){
    array[index] = element * 2;
}
function square(element , index , array){
    array[index] = Math.pow(element , 2);

}


// element , index , array are provided
nums.forEach(display);
nums.forEach(double);
console.log(nums);

nums.forEach(square);
console.log(nums);


let fruits = ["apple", "orange", "grape", "banana"];


function toUpper(element , index , array){
    array[index] = element.toUpperCase();
}

fruits.forEach(toUpper);
console.log(fruits);

function capitalize(element , index , array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits = ["apple", "orange", "grape", "banana"];

fruits.forEach(capitalize);
console.log(fruits);