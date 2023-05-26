/*
large-factorials

# codewars/4kyu/Large Factorials
Difficulty: 4kyu
URL: https://www.codewars.com/kata/557f6437bf8dcdd135000010
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const multiplyTwoString = (a, b) => {
  let aArray = ['0', ...a].reverse();
  let bArray = ['0', ...b].reverse();
  
  if (aArray < bArray) {
    [aArray, bArray] = [bArray, aArray];
  }
  
  const result = [];
  
  bArray.forEach((e, i) => {
    aArray.forEach((e2, i2) => {
      const multipleResult = ((Number(e)) * (Number(e2) * (10 ** i2)));
      result[i] = (result[i] || 0) + multipleResult;
    });
  });
  
  // carrying
  for (let i = 0; i < result.length; i += 1) {
    const e = result[i];
    const quotient = e % 10;
    const carry = Math.floor(e / 10).toString();
    
    if (carry !== '0') {
      [...carry].reverse()
        .forEach((e2, i2) => {
          const targetIndex = i + 1 + i2;
          result[targetIndex] = (Number(result[targetIndex]) || 0) + Number(e2);
        });
    }
    result[i] = quotient;
  }
  
  return result.reverse()
    .join('')
    .replace(/^0/, '');
};

function factorial(m) {
  let num = '1';
  for (let n = 1; n <= m; n += 1) {
    num = multiplyTwoString(num, n.toString());
  }
  
  return num;
}

// test
console.log(multiplyTwoString('111', '222'));
console.log(multiplyTwoString('5215', '123'));

console.log(factorial(1), '1', '1!');
console.log(factorial(5), '120', '5!');
console.log(factorial(9), '362880', '9!');
console.log(factorial(15), '1307674368000', '15!');
