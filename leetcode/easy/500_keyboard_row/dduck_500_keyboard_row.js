// https://leetcode.com/problems/keyboard-row/

// Runtime: 52 ms, faster than 72.45% of JavaScript online submissions for Keyboard Row.
//   Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Keyboard Row.
// Runtime: 56 ms, faster than 46.94% of JavaScript online submissions for Keyboard Row.
//   Memory Usage: 33.8 MB, less than 87.50% of JavaScript online submissions for Keyboard Row.
// Runtime: 48 ms, faster than 88.10% of JavaScript online submissions for Keyboard Row.
//   Memory Usage: 33.8 MB, less than 87.50% of JavaScript online submissions for Keyboard Row.


const rows = [
  new Set(['Q', 'q', 'W', 'w', 'E', 'e', 'R', 'r', 'T', 't', 'Y', 'y', 'U', 'u', 'I', 'i', 'O', 'o', 'P', 'p']),
  new Set(['A', 'a', 'S', 's', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'P', 'p']),
  new Set(['Z', 'z', 'X', 'x', 'C', 'c', 'V', 'v', 'B', 'b', 'N', 'n', 'M', 'm']),
];

const findWords = (words) => words.map((word) => {
  const chars = word.split('');
  let result = '';
  
  rows.some((row) => {
    if (row.has(chars[0])) {
      if (chars.every((v) => row.has(v))) {
        result = word;
        return true;
      }
    }
    return false;
  });
  
  return result;
})
  .filter((v) => v);

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), ['Alaska', 'Dad']);
// Input: ['Hello', 'Alaska', 'Dad', 'Peace']
// Output: ['Alaska', 'Dad']
