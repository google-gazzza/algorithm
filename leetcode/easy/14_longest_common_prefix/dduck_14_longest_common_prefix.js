// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 60 ms, faster than 60.77% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 36.6 MB, less than 15.63% of JavaScript online submissions for Longest Common Prefix.

// Runtime: 52 ms, faster than 93.03% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 36.6 MB, less than 15.63% of JavaScript online submissions for Longest Common Prefix.

// solution 1
const longestCommonPrefix = (strs = [''], lcp = []) => {
  if (!strs[0] || strs.filter((v) => v[0] !== strs[0][0]).length) {
    return lcp.join('');
  }
  lcp.push(strs[0][0]);
  return longestCommonPrefix(strs.map((v) => v.slice(1)), lcp);
};


const arr1 = ['flower', 'flow', 'flight'];
const arr2 = ['dog', 'racecar', 'car'];
const arr3 = ["a"];

longestCommonPrefix(arr1); //?
// longestCommonPrefix(arr2); //?
longestCommonPrefix(arr3); //?

// const t = '123';

// t.slice(1);//?
