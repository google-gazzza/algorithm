/*
complete-the-pattern-2

# codewars/7kyu/Complete The Pattern #2
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55733d3ef7c43f8b0700007c
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function pattern(n) {
  if (n < 1) {
    return '';
  }
  
  const result = [n];
  
  for (let i = n - 1; i > 0; i -= 1) {
    result.push(result.slice(-1) + i);
  }
  
  return result.reverse().join('\n');
}

console.log(pattern(1), "1");
console.log(pattern(2), "21\n2");
console.log(pattern(5), "54321\n5432\n543\n54\n5");
