/*
1630-arithmetic-subarrays
leetcode/medium/1630. Arithmetic Subarrays
URL: https://leetcode.com/problems/arithmetic-subarrays/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const result: boolean[] = [];

  for (let i = 0; i < l.length; i += 1) {
    const subArray = nums.slice(l[i], r[i] + 1);
    subArray.sort((a, b) => a - b);
    const diff = subArray[1] - subArray[0];
    let isArithmetic = true;

    for (let j = 1; j < subArray.length - 1; j += 1) {
      if (subArray[j + 1] - subArray[j] !== diff) {
        isArithmetic = false;
        break;
      }
    }

    result.push(isArithmetic);
  }

  return result;
}

let nums = [4, 6, 5, 9, 3, 7];
let l = [0, 0, 2];
let r = [2, 3, 5];
console.log(checkArithmeticSubarrays(nums, l, r));

// Output: [true,false,true]
nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10];
l = [0, 1, 6, 4, 8, 7];
r = [4, 4, 9, 7, 9, 10];
console.log(checkArithmeticSubarrays(nums, l, r));
// Output: [false,true,false,false,true,true]
