// rest = ... allow us to collect multiple arguments into an array

function sum(...nums){
    let total = 0;
    for(let num of nums){
        total += num;
    }
    return total;
}

console.log (sum(1,2,3,4,5));


