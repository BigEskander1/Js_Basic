let fruits = ["apple" , "orange" ,"grape", "banana"];

fruits.splice(1 , 1 , "kiwi" , "mango" , "marez");

for(i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}
    console.log("------------------------------");

fruits.unshift("lemon");    
fruits.push("watermelon");

for(i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}
console.log("------------------------------");

fruits.pop();

for(i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}
console.log("------------------------------");




fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}

console.log("------------------------------");

