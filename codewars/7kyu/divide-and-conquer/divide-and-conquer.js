/*
divide-and-conquer

# codewars/7kyu/Divide and Conquer
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57eaec5608fed543d6000021/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function divCon(x) {
  let intSum = 0;
  let stringSum = 0;
  
  x.forEach((e) => {
    if (typeof e === 'string') {
      stringSum += Number(e);
    } else {
      intSum += e;
    }
  });
  
  return intSum - stringSum;
}

// test
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
