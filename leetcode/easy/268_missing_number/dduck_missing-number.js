// https://leetcode.com/problems/missing-number/

const missingNumber = (nums, length = nums.length) => nums.sort((a, b) => a - b)
  .reduce((acc, cur, index, arr) => {
    if (acc === cur - 1) {
      if (cur === length - 1) {
        return cur + 1;
      }
      return cur;
    }
    arr.splice(0, length);
    return cur - 1;
  }, -1);

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
//?
console.log(missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]));
//?
// 18
