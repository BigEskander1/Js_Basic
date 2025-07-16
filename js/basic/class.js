// class provides a more structured way to work with objects


class Product {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`The product name is ${this.name} and the price is ${this.price}`);
    }
}

const product1 = new Product("Laptop" , 1000);
product1.displayProduct();


// static keyWord belong to the class not the object

class MathUtils {
    static PI = 3.14159;
    static sum(a, b) {
      return a + b;
    }
  }
  // we don't need to create an object to access the static method
  console.log(MathUtils.sum(2, 3));
  console.log(MathUtils.PI);


  // inheritance 
  class Animal{
    isAlive = true;
    constructor(name){
        this.name = name;
    }
    move(){
        console.log(`${this.name} is moving`);
    }
  }

  class Dog extends Animal{
    name = "Dog";
    bark(){
        console.log(`${this.name} is barking`);
    }
  }

  class Cat extends Animal{
    name = "Cat";
    bark(){
        console.log(`${this.name} is barking`);
    }
    sayNio(){
        console.log(`${this.name} is meowing`);
    }
  }

  const dog = new Dog();
  dog.move();
  dog.bark();
  dog.isAlive = false;
  console.log(dog.isAlive);

  const cat = new Cat();
  cat.move();
  cat.bark();
  cat.sayNio();
  cat.isAlive = false;
  console.log(cat.isAlive);



  // super keyword
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    }
  }
  
  const employee = new Employee("John Doe", 30, 50000);
  console.log(employee.name); // "John Doe"
  console.log(employee.age); // 30
  console.log(employee.salary); // 50000

  // getter and setter
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  }
  
  const person = new Person("John Doe", 30);
  console.log(person.name); // "John Doe"
  person.name = "Jane Doe";
  console.log(person.name); // "Jane Doe"
