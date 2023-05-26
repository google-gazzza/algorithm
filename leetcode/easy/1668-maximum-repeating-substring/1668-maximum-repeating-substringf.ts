/*
1668-maximum-repeating-substring
leetcode/easy/1668. Maximum Repeating Substring
URL: https://leetcode.com/problems/maximum-repeating-substring/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function maxRepeating(sequence: string, word: string): number {
  let max = 0;

  for (let i = 0; i < sequence.length; i += 1) {
    let count = 0;

    if (sequence.slice(i, i + word.length) === word) {
      let j = i + word.length;
      count += 1;

      while (sequence.slice(j, j + word.length) === word) {
        count += 1;
        j += word.length;
      }
    }

    max = Math.max(max, count);
  }

  return max;
}

let sequence = 'ababc';
let word = 'ab';
console.log(maxRepeating(sequence, word));
// Output: 2

sequence = 'ababc';
word = 'ba';
console.log(maxRepeating(sequence, word));
// Output: 1

sequence = 'ababc';
word = 'ac';
console.log(maxRepeating(sequence, word));
// Output: 0

sequence = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba';
word = 'aaaba';
console.log(maxRepeating(sequence, word));
// 5;