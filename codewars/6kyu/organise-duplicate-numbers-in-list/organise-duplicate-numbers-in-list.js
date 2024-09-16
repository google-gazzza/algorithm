/*
organise-duplicate-numbers-in-list

# codewars/6kyu/Organise duplicate numbers in list
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5884b6550785f7c58f000047
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function group(arr) {
  const result = [];
  
  while (arr.length) {
    const temp = [];
    const target = arr[0];
    const filteredArray = arr.filter((e) => e !== target);
    
    for (let i = 0; i < (arr.length - filteredArray.length); i += 1) {
      temp.push(target);
    }
    
    result.push(temp);
    arr = filteredArray;
  }
  
  return result;
}

// test
console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
console.log(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);

// Best Practice
function group(arr) {
  return [...new Set(arr)].map((e) => arr.filter((x) => x === e));
}
