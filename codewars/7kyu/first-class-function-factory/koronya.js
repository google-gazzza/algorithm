// [JS][7kyu] First-Class Function Factory
// first-class-function-factory
// https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/javascript

const factory = (x) => (arr) => arr.map((num) => num * x)

const fives = factory(5) // returns a function - fives
const myArray = [1, 2, 3]
fives(myArray) //returns [5, 10, 15];
