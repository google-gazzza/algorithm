/*
simple-fun-79-delete-a-digit

# codewars/6kyu/Simple Fun #79: Delete a Digit
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5894318275f2c75695000146/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function deleteDigit(n) {
  const strNum = [...String(n)];
  const nums = [];
  
  for (let i = 0; i < strNum.length; i += 1) {
    const target = strNum.slice(0);
    target.splice(i, 1);
    nums.push(Number(target.join('')));
  }
  
  return Math.max(...nums);
}

// test
console.log(deleteDigit(152), 52);
console.log(deleteDigit(1001), 101);
console.log(deleteDigit(10), 1);
