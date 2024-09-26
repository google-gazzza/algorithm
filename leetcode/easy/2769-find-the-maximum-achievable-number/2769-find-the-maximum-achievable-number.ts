// leetcode/easy/2769. Find the Maximum Achievable Number
// 2769-find-the-maximum-achievable-number
// URL: https://leetcode.com/problems/find-the-maximum-achievable-number/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin

function theMaximumAchievableX(num: number, t: number): number {
  return num + (t * 2);
}

let num = 4;
let t = 1;
console.log(theMaximumAchievableX(num, t));
// Output: 6

num = 3;
t = 2;
console.log(theMaximumAchievableX(num, t));
// Output: 7
