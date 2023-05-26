/*
n-smallest-elements-in-original-order

# codewars/6kyu/N smallest elements in original order
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5aec1ed7de4c7f3517000079
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function firstNSmallest(array, n) {
  const originalArray = array.slice();
  const sortedArray = array.slice().sort((a, b) => a - b);
  const eliminateTargets = sortedArray.slice(n);
  
  while (eliminateTargets.length) {
    const targetIndex = originalArray.lastIndexOf(eliminateTargets.pop());
    originalArray.splice(targetIndex, 1);
  }
  
  return originalArray;
}

// test
console.log(firstNSmallest([1,2,3,4,5],3), [1,2,3]);
console.log(firstNSmallest([5,4,3,2,1],3), [3,2,1]);
console.log(firstNSmallest([1,2,3,1,2],3), [1,2,1]);
console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);
console.log(firstNSmallest([1, 2, 3, 4, 5], 0), []);
console.log(firstNSmallest([1,2,3,4,5],5), [1,2,3,4,5]);
console.log(firstNSmallest([1,2,3,4,2],4), [1,2,3,2]);
console.log(firstNSmallest([2,1,2,3,4,2],2), [2,1]);
console.log(firstNSmallest([2,1,2,3,4,2],3), [2,1,2]);
console.log(firstNSmallest([2,1,2,3,4,2],4), [2,1,2,2]);
