// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

// Runtime: 68 ms, faster than 99.17% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Runtime: 80 ms, faster than 83.63% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
//   Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.


// functional programming style
const replaceElements = (arr) => {
  arr.reduceRight((a, c, i, arr) => (arr[i] = arr[i + 1] > arr[i] ? arr[i + 1] : arr[i]));
  return [...arr.slice(1), -1];
};

// Imperative programming style
const replaceElements2 = (arr) => {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      arr[i] = arr[i + 1];
    }
  }
  arr.push(-1);
  return arr.slice(1);
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
// Output: [18,6,6,6,1,-1]
