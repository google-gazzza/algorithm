// [JS][7kyu] Refactored Greeting
// refactored-greeting
// https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript

class Person {
  constructor(name) {
    this.name = name
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`
  }
}

let jack = new Person('Jack')
let jill = new Person('Jill')
jack.name === 'Jack'
jill.name === 'Jill'
jack.greet('Jill') === 'Hello Jill, my name is Jack'
jill.greet('Jack') === 'Hello Jack, my name is Jill'
