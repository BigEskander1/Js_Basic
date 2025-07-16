// .reduce = reduce the elements of an array to a single value
const nums = [1,2,3,4,5];

const price = [5 ,12, 34,25, 20 ];


function sum(accumulator , num){
    return accumulator + num;
}

const total = price.reduce(sum);

console.log(total); 


function min(accumulator , num){
    return Math.min(accumulator , num);
}
function max(accumulator , num){
    return Math.max(accumulator , num);
}

const minPrice = price.reduce(min);
const maxPrice = price.reduce(max);

console.log(minPrice);
console.log(maxPrice);