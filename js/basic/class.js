// class provides a more structured way to work with objects


// class Product {
//     constructor(name , price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`The product name is ${this.name} and the price is ${this.price}`);
//     }
// }

// const product1 = new Product("Laptop" , 1000);
// product1.displayProduct();


// // static keyWord belong to the class not the object

// class MathUtils {
//     static PI = 3.14159;
//     static sum(a, b) {
//       return a + b;
//     }
//   }
//   // we don't need to create an object to access the static method
//   console.log(MathUtils.sum(2, 3));
//   console.log(MathUtils.PI);


//   // inheritance 
//   class Animal{
//     isAlive = true;
//     constructor(name){
//         this.name = name;
//     }
//     move(){
//         console.log(`${this.name} is moving`);
//     }
//   }

//   class Dog extends Animal{
//     name = "Dog";
//     bark(){
//         console.log(`${this.name} is barking`);
//     }
//   }

//   class Cat extends Animal{
//     name = "Cat";
//     bark(){
//         console.log(`${this.name} is barking`);
//     }
//     sayNio(){
//         console.log(`${this.name} is meowing`);
//     }
//   }

//   const dog = new Dog();
//   dog.move();
//   dog.bark();
//   dog.isAlive = false;
//   console.log(dog.isAlive);

//   const cat = new Cat();
//   cat.move();
//   cat.bark();
//   cat.sayNio();
//   cat.isAlive = false;
//   console.log(cat.isAlive);



//   // super keyword
//   class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age, salary) {
//       super(name, age);
//       this.salary = salary;
//     }
//   }
  
//   const employee = new Employee("John Doe", 30, 50000);
//   console.log(employee.name); // "John Doe"
//   console.log(employee.age); // 30
//   console.log(employee.salary); // 50000

//   // getter and setter
//   class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       this._name = value;
//     }
//   }
  
//   const person = new Person("John Doe", 30);
//   console.log(person.name); // "John Doe"
//   person.name = "Jane Doe";
//   console.log(person.name); // "Jane Doe"


  // nested object 

  // const person = {
  //   name: "John Doe",
  //   age: 30,
  //   address: {
  //     street: "123 Main St",
  //     city: "Anytown",
  //     state: "CA",
  //     zip: "12345"
  //   }
  // }
  // console.log(person.address.city);

  // for(const key in person.address) {
  //   console.log(key + ": " + person.address[key]);
  // }



  // example 
  class Person {
    constructor(name, age , ...address) {
      this.name = name;
      this.age = age;
      this.address = new Address(...address);
    }
  }
  
class Address{
    constructor(street , city , state , zip){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

person1 = new Person("John Doe", 30, "123 Main St", "Anytown", "CA", "12345");
console.log(person1.name); // "John Doe"
console.log(person1.age); // 30
for(const key in person1.address) {
    console.log(key + ": " + person1.address[key]);
  }

// array of objects
const fruits = [
    {
        name: "apple",
        color: "red",
        calories: 52
    },
    {
        name: "banana",
        color: "yellow",
        calories: 89
    },
    {
        name: "orange",
        color: "orange",
        calories: 45
    }
]

console.log(fruits[0].name);
fruits.push({
    name: "kiwi",
    color: "green",
    calories: 60
})

for(i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i].name);
}

const fruitsNames = fruits.map(fruit => fruit.name);
console.log(fruitsNames);


const maxCalories = fruits.reduce((a, b) => Math.max(a, b.calories), 0);
console.log(maxCalories);