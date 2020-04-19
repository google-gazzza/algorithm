// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// Runtime: 60 ms, faster than 86.63% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 36.3 MB, less than 81.25% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Runtime: 64 ms, faster than 78.71% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 36.2 MB, less than 87.50% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

const repeatedNTimes = (input) => {
  let result;
  input.some((element, index, arr) => {
    if (input.indexOf(element) !== index) {
      result = element;
      return true;
    }
    return false;
  });
  return result;
};

// Runtime: 80 ms, faster than 46.04% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 39.4 MB, less than 12.50% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Runtime: 72 ms, faster than 58.58% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 39.4 MB, less than 12.50% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

const repeatedNTimes3 = (input, targetSize = input.length / 2) => {
  const map = new Map();
  let value;
  
  return input.map((v, i, arr) => {
    value = map.get(v);
    map.set(v, (value || 0) + 1);
    if (value === (targetSize - 1)) {
      arr.splice(1);
      return v;
    }
    return false;
  }).filter((v) => Number.isInteger(v))[0];
};

// Runtime: 84 ms, faster than 40.26% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 42.6 MB, less than 6.25% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Runtime: 84 ms, faster than 40.26% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//   Memory Usage: 42.6 MB, less than 6.25% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
const repeatedNTimes2 = (arr) => {
  const map = new Map();
  arr.forEach((v) => map.set(v, (map.get(v) || 0) + 1));
  return [...map.entries()]
    .sort((a, b) => a[1] - b[1])
    .pop()[0];
};

// repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]);
//?
// Output: 5

// repeatedNTimes([1, 2, 2, 5, 3, 2]);
//?
// Output: 2
//?

repeatedNTimes([4, 1, 7, 0, 0, 9, 0, 0]);
//?
// expected 0
