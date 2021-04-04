/*
loneliest-character

# codewars/6kyu/Loneliest character
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function loneliest(str) {
  const arr = [...(str.trim())].map((e) => (e === ' ' ? 1 : e));
  
  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(arr[i]) && Number.isInteger(arr[i + 1])) {
      arr[i] += arr[i + 1];
      arr.splice(i + 1, 1);
      i -= 1;
    }
  }
  
  const result = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isInteger(arr[i])) {
      const sum = [arr[i - 1], arr[i + 1], 0]
        .filter((e) => Number.isInteger(e))
        .reduce((acc, cur) => acc + cur);
      
      result.push([sum, arr[i]]);
    }
  }
  
  const max = Math.max(...result.map((e) => e[0]));
  
  return result.filter((e) => e[0] === max)
    .map((e) => e[1]);
}

// test
console.log(loneliest('a'), ['a'], "result");
console.log(loneliest('abc d   ef  g   h i j      '), ['g'], "result");
console.log(loneliest('a   b   c '), ['b'], "result");
console.log(loneliest('  abc  d  z    f gk s '), ['z'], "result");
console.log(loneliest('a  b  c  de  ').sort(), ['b', 'c'], "result");
console.log(loneliest('abc').sort(), ['a', 'b', 'c'], "result");
