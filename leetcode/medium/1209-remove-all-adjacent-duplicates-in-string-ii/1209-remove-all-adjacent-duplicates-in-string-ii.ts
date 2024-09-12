/*
# leetcode/medium/1209. Remove All Adjacent Duplicates in String II
# 1209-remove-all-adjacent-duplicates-in-string-ii
# URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function removeDuplicates(s: string, k: number): string {
  const arr = [...s];

  if (arr.length < k) {
    return arr.join('');
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + k - 1]) {
      continue;
    }
    for (let j = i + 1; j < i + k; j += 1) {
      if (arr[i] !== arr[j]) {
        break;
      }

      if (j === i + k - 1) {
        arr.splice(i, k);
        i = i - k;
        break;
      }
    }
  }

  return arr.join('');
}

let s = 'abcd';
let k = 2;
console.log(removeDuplicates(s, k));
// Output: "abcd"

s = 'deeedbbcccbdaa';
k = 3;
console.log(removeDuplicates(s, k));
// Output: "aa"

s = 'pbbcggttciiippooaais';
k = 2;
console.log(removeDuplicates(s, k));
// Output: "ps"
