/*
sort-numbers

# codewars/7kyu/Sort Numbers
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const insertionSort = (arr) => {
  const result = [];
  
  while (arr.length) {
    let minimumValueIndex = 0;
    
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[minimumValueIndex] > arr[i]) {
        minimumValueIndex = i;
      }
    }
    
    result.push(arr[minimumValueIndex]);
    arr.splice(minimumValueIndex, 1);
  }
  
  return result;
};

// tim sort
const solution = (arr) => {
  if (!arr) {
    return [];
  }
  
  if (arr.length > 10) {
    return insertionSort(solution(arr.slice(0, 10)).concat(solution(arr.slice(10))));
  }
  return insertionSort(arr);
};

// test
console.log(solution([5, 4, 6, 3, 7]), [3, 4, 5, 6, 7]);
console.log(solution([5, 4, 6, 3, 7, 5, 1, 5, 12, 4, 12, 5, 32, 5, 5, 6, 2, 6,]));

const arr = [380, 358, 229, 102, 264, 308, 331, 85, 465, 461, 70, 28, 221, 488, 394, 420, 61, 178, 150, 156, 403, 493, 449, 488, 76, 87, 389, 327, 399, 333, 233, 461, 11, 35, 450, 108, 193, 288, 495, 496];
console.log(solution(arr));
