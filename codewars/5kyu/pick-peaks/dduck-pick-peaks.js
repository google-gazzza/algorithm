/*
pick-peaks

# codewars/5kyu/Pick peaks
Difficulty: 5kyu
URL: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function pickPeaks(arr) {
  const result = {
    pos: [],
    peaks: [],
  };
  
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] < arr[i]) {
      const begin = i;
      
      while (arr[i] === arr[i + 1]) {
        i += 1;
      }
      
      if (arr[i] > arr[i + 1]) {
        result.pos.push(begin);
        result.peaks.push(arr[i]);
      }
    }
  }
  
  return result;
}


// test
console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), { pos: [3, 7, 10], peaks: [6, 3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), { pos: [2, 4], peaks: [3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), {
  pos: [2, 7, 14, 20],
  peaks: [5, 6, 5, 5]
});
console.log(pickPeaks([]), { pos: [], peaks: [] });
console.log(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });
