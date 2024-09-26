/*
possibilities-of-throwing-a-coin-n-times

# codewars/6kyu/Possibilities of throwing a coin n times
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5ad6266b673f2f067b000004
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

// --------------------------------------------
// recursive approach
// --------------------------------------------
const flattening = (arr) => arr.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    cur = flattening(cur);
  }
  acc = acc.concat(cur);
  
  return acc;
}, []);

function coin(n, prefix = '') {
  if (n > 0) {
    return flattening([
      coin(n - 1, `${prefix}H`),
      coin(n - 1, `${prefix}T`),
    ]);
  }
  
  return prefix;
}

// --------------------------------------------
// bit counting approach
// --------------------------------------------
const replaceZeroToH = (str) => str.replace(/0/g, 'H');
const replaceOneToT = (str) => str.replace(/1/g, 'T');

function coin(n) {
  const result = [];
  
  for (let i = 0; i < (2 ** n); i += 1) {
    let temp = i.toString(2).padStart(n, '0');
    temp = replaceZeroToH(temp);
    temp = replaceOneToT(temp);
    result.push(temp);
  }
  
  return result;
}


console.log(coin(1), ['H', 'T']);
console.log(coin(2), ['HH', 'HT', 'TH', 'TT']);
console.log(coin(3), ['HHH', 'HHT', 'HTH', 'HTT', 'THH', 'THT', 'TTH', 'TTT']);
