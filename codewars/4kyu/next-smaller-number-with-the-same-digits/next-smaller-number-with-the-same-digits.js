/*
next-smaller-number-with-the-same-digits

# codewars/4kyu/Next smaller number with the same digits
Difficulty: 4kyu
URL: https://www.codewars.com/kata/5659c6d896bc135c4c00021e
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function nextSmaller(n) {
  const numbers = [...String(n)].map(Number);
  
  for (let i = numbers.length - 2; i >= 0; i -= 1) {
    const belowNumbers = numbers.slice(i + 1)
      .sort((a, b) => b - a)
      .filter((e) => numbers[i] > e);
    
    if (belowNumbers.length) {
      const left = numbers.slice(0, i + 1);
      const right = numbers.slice(i + 1);
      const targetIndex = right.indexOf(belowNumbers[0]);
      
      [left[left.length - 1], right[targetIndex]] = [right[targetIndex], left[left.length - 1]];
      
      let result = left.concat(right.sort((a, b) => b - a))
        .join('');
      result = Number(result);
      
      if (String(result).length === numbers.length) {
        return result;
      }
    }
  }
  
  return -1;
}

// test
console.log(nextSmaller(21), 12);
console.log(nextSmaller(907), 790);
console.log(nextSmaller(531), 513);
console.log(nextSmaller(135), -1);
console.log(nextSmaller(2071), 2017);
console.log(nextSmaller(1027), -1);
console.log(nextSmaller(414), 144);
console.log(nextSmaller(123456798), 123456789);
console.log(nextSmaller(123456789), -1);
console.log(nextSmaller(59884848483559), -1);
// input:       59884848483559
// Expected:    59884848459853,
// instead got: 59884848459583
