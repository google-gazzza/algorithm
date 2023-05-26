/*
the-observed-pin

# codewars/4kyu/The observed PIN
Difficulty: 4kyu
URL: https://www.codewars.com/kata/5263c6999e0f40dee200059d
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const ADJACENT_NUMBER = {
  1: [1, 2, 4],
  2: [1, 2, 3, 5],
  3: [2, 3, 6],
  4: [1, 4, 5, 7],
  5: [2, 4, 5, 6, 8],
  6: [3, 5, 6, 9],
  7: [4, 7, 8],
  8: [5, 7, 8, 9, 0],
  9: [6, 8, 9],
  0: [8, 0],
};

const getCombinations = (arr, prefix = []) => {
  const copiedArr = arr.slice();
  const cur = copiedArr.shift();
  
  if (cur) {
    return cur.map((e) => getCombinations(copiedArr, prefix.concat(e)))
      .reduce((acc, cur) => acc.concat(cur), []);
  }
  
  return prefix.join('');
};

function getPINs(observed) {
  return getCombinations([...observed].map((e) => ADJACENT_NUMBER[e]));
}

const expected = {
  8: ['5', '7', '8', '9', '0'],
  11: ['11', '22', '44', '12', '21', '14', '41', '24', '42'],
  369: ['339', '366', '399', '658', '636', '258', '268', '669', '668', '266', '369', '398', '256', '296', '259', '368', '638', '396', '238', '356', '659', '639', '666', '359', '336', '299', '338', '696', '269', '358', '656', '698', '699', '298', '236', '239'],
};

// test
console.log(getPINs('8'), expected[8]); //?
console.log(getPINs('11'), expected[11]); //?
console.log(getPINs('396'), expected[396]); //?
