/*
javascript-array-filter

# codewars/7kyu/JavaScript Array Filter
Difficulty: 7kyu
URL: https://www.codewars.com/kata/514a6336889283a3d2000001
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((e) => e % 2 === 0);
}

// test
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
console.log(getEvenNumbers([1, 2]), [2]);
console.log(getEvenNumbers([12, 14, 15]), [12, 14]);
console.log(getEvenNumbers([13, 15]), []);
console.log(getEvenNumbers([1, 3, 9]), []);
