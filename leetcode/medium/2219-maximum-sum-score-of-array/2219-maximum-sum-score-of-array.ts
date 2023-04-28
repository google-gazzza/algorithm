/*
# leetcode/medium/2219. Maximum Sum Score of Array
# 2219-maximum-sum-score-of-array
# URL: https://leetcode.com/problems/maximum-sum-score-of-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function addToArrayForm(num: number[], k: number): number[] {
  const kArr = k.toString().split('');

  for (let i = kArr.length - 1; i >= 0; i--) {
    if (num.length > 0) {
      const newNum = parseInt(kArr[i], 10) + num.pop();
      kArr[i] = (newNum).toString();
    }
  }

  while (num.length > 0) {
    kArr.unshift(num.pop().toString());
  }

  let carry = 0;

  for (let i = kArr.length - 1; i >= 0; i -= 1) {
    if (carry) {
      kArr[i] = (parseInt(kArr[i], 10) + 1).toString();
      carry = 0;
    }

    if (parseInt(kArr[i], 10) > 9) {
      carry = 1;
      kArr[i] = (parseInt(kArr[i], 10) - 10).toString();
    }
  }

  if (carry) {
    kArr.unshift('1');
  }

  return kArr.map((v) => parseInt(v, 10));
}

let num = [1, 2, 0, 0];
let k = 34;
console.log(addToArrayForm(num, k));
// Output: [1,2,3,4]

num = [2, 7, 4];
k = 181;
console.log(addToArrayForm(num, k));
// Output: [4,5,5]

num = [2, 1, 5];
k = 806;
console.log(addToArrayForm(num, k));
// Output: [1, 0, 2, 1];
