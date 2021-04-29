/*
longest-common-subsequence

# codewars/5kyu/Longest Common Subsequence
Difficulty: 5kyu
URL: https://www.codewars.com/kata/52756e5ad454534f220001ef/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const longestCommonSequence = (a, b) => {
  const aArray = [...a];
  let bArray = [...b];
  const result = [];
  
  while (aArray.length) {
    const target = aArray.shift();
    const index = bArray.indexOf(target);
    
    if (index !== -1) {
      result.push(target);
      bArray = bArray.slice(index + 1);
    }
  }
  
  return result;
};

function LCS(a, b) {
  const ab = longestCommonSequence(a, b).join('');
  const ba = longestCommonSequence(b, a).join('');
  
  if (ab.length > ba.length) {
    return ab;
  }
  
  return ba;
}

// test
console.log(LCS('a', 'b'), '');
console.log(LCS('abcdef', 'abc'), 'abc');
console.log(LCS('132535365', '123456789'), '12356');
