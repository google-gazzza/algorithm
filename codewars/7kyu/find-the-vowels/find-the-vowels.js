/*
find-the-vowels

# codewars/7kyu/Find the vowels
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5680781b6b7c2be860000036/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function vowelIndices(word) {
  const result = [];
  
  [...word].forEach((e, i) => {
    if (e.match(/[a|e|i|o|u|y]/i)) {
      result.push(i + 1);
    }
  });
  
  return result;
}

// test
console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]);
