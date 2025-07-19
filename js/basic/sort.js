// sort() = sorts an array in place and returns the sorted array
//          sort elements as strings in lexicographical order by default not alphabetic
//          lexicographical = (alphabet + numbers + symbols) as a string

let numbers = [1,10 ,8,9, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'Alice Johnson', age: 35 }
    ];
    
    people.sort((a, b) => a.age - b.age);
    
    console.log(people);


const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);



