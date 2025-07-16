// object = collection of properties and methods
const person = {
    name: "John Doe",
    age: 30,
    email: "iVd0m@example.com",
    sayHello: function() {console.log("Hello, my name is " + this.name);},
    eat : () => {console.log("Eating pizza");}
};
const person2 = {
    name: "John Doe",
    age: 30,
    email: "iVd0m@example.com",
    sayHello: () => {console.log("Hello, my name is " + this.name);}, 
    eat : () => {console.log("Eating hamburger");}

};

console.log(person.name); // "John Doe"
console.log(person.age); // 30
console.log(person.email); // "iVd0m@example.com"
person.sayHello(); 

person.name = "Jane Doe";
console.log(person.name); // "Jane Doe"


person.eat();
person2.eat();

// constructor
function Person(name, age, email , eat) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.eat = eat;
    this.sayHello = function() {console.log("Hello, my name is " + this.name);};
    this.eat = () => {console.log("Eating " + this.eat);};
  }

const p1 = new Person("John Doe", 30, "iVd0m@example.com" , "pizza");
console.log(p1.name); // "John Doe"
console.log(p1.age); // 30
console.log(p1.email); // "iVd0m@example.com"
p1.sayHello();