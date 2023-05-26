/*
one-is-the-loneliest-number

# codewars/6kyu/One is the loneliest number
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5dfa33aacec189000f25e9a9/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const sum = (arr) => (arr || []).reduce((acc, cur) => acc + cur, 0);

function loneliest(number) {
  if (!Number.isInteger(number)) {
    return false;
  }
  
  const arr = [...String(number)].map(Number);
  const result = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    const left = arr.slice(Math.max(i - arr[i], 0), i);
    const right = arr.slice(i + 1, i + arr[i] + 1);
    
    result.push([sum([sum(left), sum(right)]), arr[i]]);
  }
  
  result.sort((a, b) => a[0] - b[0]);
  
  return !!result.filter((e) => result[0][0] === e[0])
    .filter((e) => e[1] === 1)
    .length;
}

// test
console.log(loneliest(34315), true);
console.log(loneliest(123456), true);
console.log(loneliest(8854778), false);
console.log(loneliest(65432165432), false);
console.log(loneliest(0), false);
console.log(loneliest(1), true);
console.log(loneliest(11111), true);
console.log(loneliest(3652101), true);
