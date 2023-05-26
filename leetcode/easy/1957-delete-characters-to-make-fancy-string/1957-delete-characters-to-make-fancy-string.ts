/*
1957-delete-characters-to-make-fancy-string
leetcode/easy/1957. Delete Characters to Make Fancy String
URL: https://leetcode.com/problems/delete-characters-to-make-fancy-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function makeFancyString(s: string): string {
  const arr = s.split('');
  const result = arr.slice(0, 2);

  for (let i = 2; i < arr.length; i += 1) {
    if (result[result.length - 2] !== result[result.length - 1]
      || result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result.join('');
}

let s = 'leeetcode';
console.log(makeFancyString(s));
// "leetcode"

s = 'aaabaaaa';
console.log(makeFancyString(s));
// Output: "aabaa"

s = 'aab';
console.log(makeFancyString(s));
