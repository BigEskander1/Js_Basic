// .filter = create a new arr by filtering the elements of an existing arr

let nums = [1,2,3,4,5,6,7,8,9,10];

function isEven(num){
    return num % 2 === 0;
}
function isOdd(num){
    return num % 2 !== 0;
}
let evenNums = nums.filter(isEven);
let oddNums = nums.filter(isOdd);
console.log(evenNums);
console.log(oddNums);