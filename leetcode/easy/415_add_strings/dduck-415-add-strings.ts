/*
415-add-strings

# leetcode/easy/415. Add Strings
Difficulty: easy
URL: https://leetcode.com/problems/add-strings/
Tags:

## Approach

### en

### kr

## Solution
### TypeScript

*/

function addStrings(num1: string, num2: string): string {
  let longestString = ['0'].concat(num1.split('')).reverse();
  let shortestString = ['0'].concat(num2.split('')).reverse();

  if (longestString.length < shortestString.length) {
    [longestString, shortestString] = [shortestString, longestString];
  }

  let result = longestString.map((e, i, arr) => {
    const sum = Number(e) + Number(shortestString[i] || 0);
    arr[i + 1] = (Number(arr[i + 1]) + Math.floor(sum / 10)).toString();

    return (sum % 10).toString();
  })
    .reverse()
    .join('');

  result = result.replace(/^0/, '');

  return result;
};

console.log(addStrings('99999991', '12'));
console.log(addStrings('1', '2'));
