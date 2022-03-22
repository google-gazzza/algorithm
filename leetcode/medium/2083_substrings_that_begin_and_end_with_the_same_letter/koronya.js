// [Medium] 2083. Substrings That Begin and End With the Same Letter
// 2083_substrings_that_begin_and_end_with_the_same_letter

// https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter
// Runtime: 92 ms, faster than 50.00% of JavaScript online submissions for Substrings That Begin and End With the Same Letter.
// Memory Usage: 48.5 MB, less than 30.00% of JavaScript online submissions for Substrings That Begin and End With the Same Letter.

/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function (s) {
  const getValue = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i += 1 || 0) {
      sum += i;
    }
    return sum;
  };
  const strMap = new Map();
  s.split("").forEach((str) => {
    strMap.set(str, (strMap.get(str) || 0) + 1);
  });
  return [...strMap].reduce((acc, cur) => acc + getValue(cur[1]), 0);
};

const isSameBeginAndEnd = (str) => str[0] === str[str.length - 1];

// TLE...
const numberOfSubstrings2 = function (s) {
  const sLen = s.length;
  let result = sLen;
  let target = 2;
  while (target <= sLen) {
    let limit = sLen - target;
    for (let i = 0; i <= limit; i += 1 || 0) {
      if (s[i] === s[i + target - 1]) {
        result += 1;
      }
    }
    target += 1;
  }

  return result;
};

const numberOfSubstrings3 = function (s) {
  const sLen = s.length;
  let result = sLen;
  let target = 2;
  while (target <= sLen) {
    let limit = sLen - target;
    for (let i = 0; i <= limit; i += 1 || 0) {
      if (isSameBeginAndEnd(s.substring(i, i + target)) === true) {
        result += 1;
      }
    }
    target += 1;
  }

  return result;
};

// numberOfSubstrings('abcba') === 7
numberOfSubstrings("abacad") === 9;
// numberOfSubstrings('a') === 1
// numberOfSubstrings('aaaaa') === 15
