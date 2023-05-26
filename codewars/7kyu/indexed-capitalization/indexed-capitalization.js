/*
indexed-capitalization

# codears/7kyu/Indexed capitalization
 Difficulty: 7kyu
URL: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function capitalize(s, arr) {
  const result = [...s];
  
  arr.forEach((e) => {
    if (e < s.length) {
      result[e] = result[e].toUpperCase();
    }
  });
  
  return result.join('');
};

// test
console.log(capitalize('abcdef', [1, 2, 5]), 'aBCdeF');
console.log(capitalize('abcdef', [1, 2, 5, 100]), 'aBCdeF');
console.log(capitalize('codewars', [1, 3, 5, 50]), 'cOdEwArs');
console.log(capitalize('abracadabra', [2, 6, 9, 10]), 'abRacaDabRA');
console.log(capitalize('codewarriors', [5]), 'codewArriors');
console.log(capitalize('indexinglessons', [0]), 'Indexinglessons');
