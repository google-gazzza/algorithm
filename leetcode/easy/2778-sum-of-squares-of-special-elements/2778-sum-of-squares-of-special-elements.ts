// leetcode/easy/2778. Sum of Squares of Special Elements
// 2778-sum-of-squares-of-special-elements
// URL: https://leetcode.com/problems/sum-of-squares-of-special-elements/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function sumOfSquares(nums: number[]): number {
  let sum = 0;

  nums.forEach((num, index) => {
    if (nums.length % (index + 1) === 0) {
      sum += num * num;
    }
  });

  return sum;
}

let nums = [1, 2, 3, 4];
console.log(sumOfSquares(nums));
// Output: 21

nums = [2, 7, 1, 19, 18, 3];
console.log(sumOfSquares(nums));
// Output: 63

