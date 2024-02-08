// leetcode/easy/3019. Number of Changing Keys
// 3019-number-of-changing-keys
// URL: https://leetcode.com/problems/number-of-changing-keys/description/

function countKeyChanges(s: string): number {
  let count = 0;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) {
      count += 1;
    }
  }

  return count;
}

let s = 'aAbBcC';
console.log(countKeyChanges(s));
// Output: 2
s = 'AaAaAaaA';
console.log(countKeyChanges(s));
// Output: 0
