// https://leetcode.com/problems/monotonic-array/
// Runtime: 72 ms, faster than 82.64% of JavaScript online submissions for Monotonic Array.
//   Memory Usage: 40.7 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.
// Runtime: 84 ms, faster than 36.57% of JavaScript online submissions for Monotonic Array.
//   Memory Usage: 41 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.
// Runtime: 68 ms, faster than 93.06% of JavaScript online submissions for Monotonic Array.
//   Memory Usage: 41.2 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.

const isMonotonic = (a) => new Set(a.map((v, i, arr) => {
  if (i !== 0) {
    return Math.sign((arr[i - 1] || 0) - v);
  }
  return 0;
})).size < 3;

// Runtime: 80 ms, faster than 50.00% of JavaScript online submissions for Monotonic Array.
//   Memory Usage: 42.7 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.
// Runtime: 84 ms, faster than 36.57% of JavaScript online submissions for Monotonic Array.
//   Memory Usage: 42.6 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.
const isMonotonic2 = (a) => {
  const set = new Set([0]);
  let sign = 0;
  
  return new Set(a.map((v, i, arr) => {
    if (i !== 0) {
      sign = Math.sign((arr[i - 1] || 0) - v);
    }
    set.add(sign);
    
    if (set.size > 2) {
      arr.splice(1);
    }
    
    return sign;
  })).size < 3;
};

console.log(isMonotonic([1, 2, 2, 3], true));
console.log(isMonotonic([6, 5, 4, 4], true));
console.log(isMonotonic([1, 3, 2], true));
console.log(isMonotonic([1, 1, 3], true));
