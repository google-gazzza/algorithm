/*
# leetcode/easy/1502. Can Make Arithmetic Progression From Sequence
# 1502-can-make-arithmetic-progression-from-sequence
# URL: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}

let arr = [3, 5, 1];
canMakeArithmeticProgression(arr);
// Output: true

arr = [1, 2, 4];
canMakeArithmeticProgression(arr);
// Output: false
