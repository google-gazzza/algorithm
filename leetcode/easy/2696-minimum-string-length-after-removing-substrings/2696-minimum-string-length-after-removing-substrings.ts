// leetcode/easy/2696. Minimum String Length After Removing Substrings
// 2696-minimum-string-length-after-removing-substrings
// URL: https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

function minLength(s: string): number {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replace('AB', '');
    s = s.replace('CD', '');
  }

  return s.length;
}

let s = "ABFCACDB";
console.log(minLength(s));
// Output: 2

s = "ACBBD";
console.log(minLength(s));
// Output: 5
