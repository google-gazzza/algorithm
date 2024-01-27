// leetcode/easy/1640. Check Array Formation Through Concatenation
// 1640-check-array-formation-through-concatenation
// URL: https://leetcode.com/problems/check-array-formation-through-concatenation/description/

function canFormArray(arr: number[], pieces: number[][]): boolean {

  for (let i = 0; i < pieces.length; i += 1) {
    const targetIndex = arr.indexOf(pieces[i][0]);

    for (let j = 0; j < pieces[i].length; j += 1) {
      if (pieces[i][j] !== arr[targetIndex + j]) {
        return false;
      }
    }
  }

  return true;
}

let arr = [15, 88];
let pieces = [[88], [15]];
console.log(canFormArray(arr, pieces));
// Output: true
arr = [49, 18, 16];
pieces = [[16, 18, 49]];
console.log(canFormArray(arr, pieces));
// Output: false
arr = [91, 4, 64, 78];
pieces = [[78], [4, 64], [91]];
console.log(canFormArray(arr, pieces));
// Output: true
