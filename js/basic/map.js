// .map = accepts a callback and applies that fun  
// to each element of an array , then return a new array
const nums = [1,2,3,4,5];

function square(element){
    return Math.pow(element , 2);
}

const squaredNums = nums.map(square);
console.log(squaredNums);


const date = ["2024-1-10" , "2023-2-34" , "2022-3-45" ];

function formatDate(element){
    const part = element.split("-");
    console.log(part);
    return `${part[1]}/${part[2]}/${part[0]}`;
}

const formattedDate = date.map(formatDate);
console.log(formattedDate);