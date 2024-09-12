/*
# leetcode/medium/1910. Remove All Occurrences of a Substring
# 1910-remove-all-occurrences-of-a-substring
# URL: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }

  return s;
};

let s = 'daabcbaabcbc';
let part = 'abc';

console.log(removeOccurrences(s, part));
// Output: 'dab';


s = 'axxxxyyyyb';
part = 'xy';
console.log(removeOccurrences(s, part));
// Output: "ab"
