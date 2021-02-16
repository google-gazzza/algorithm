/*
count-the-digit

# codewars/7kyu/Count the Digit
Difficulty: 7kyu
URL: https://www.codewars.com/kata/566fc12495810954b1000030
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const nbDig = (n, d) => {
  let str = '';
  
  while (n > -1) {
    str += n ** 2;
    n -= 1;
  }
  
  return str.match(new RegExp(d, 'g')).length;
};

// test
console.log(nbDig(5750, 0), 4700);
console.log(nbDig(11011, 2), 9481);
console.log(nbDig(12224, 8), 7733);
console.log(nbDig(11549, 1), 11905);
