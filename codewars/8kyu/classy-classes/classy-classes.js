// classy-classes
// Classy Classes
// difficulty: 8kyu
// https://www.codewars.com/kata/55a144eff5124e546400005a/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}'s age is ${this.age}`;
  }
}


var john = new Person('john', 34);
console.log(john.info, 'johns age is 34');
