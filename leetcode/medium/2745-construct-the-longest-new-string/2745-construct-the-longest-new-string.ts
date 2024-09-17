// leetcode/medium/2745. Construct the Longest New String
// 2745-construct-the-longest-new-string
// URL: https://leetcode.com/problems/construct-the-longest-new-string/

function longestString(x: number, y: number, z: number): number {
  if (x === y) {
    return x * 4 + z * 2;
  }

  return (Math.min(x, y) * 4 + 2) + z * 2;
}

let x = 2;
let y = 5;
let z = 1;
console.log(longestString(x, y, z));
// Output: 12

x = 3;
y = 2;
z = 2;
console.log(longestString(x, y, z));
// Output: 14;

x = 1;
y = 1;
z = 1;
console.log(longestString(x, y, z));
