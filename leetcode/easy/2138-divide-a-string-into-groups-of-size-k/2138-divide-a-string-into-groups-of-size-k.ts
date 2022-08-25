/*
2138-divide-a-string-into-groups-of-size-k
leetcode/easy/2138. Divide a String Into Groups of Size k
URL: https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function divideString(s: string, k: number, fill: string): string[] {
  const sArray = s.split('');
  const result = [];

  while (sArray.length > 0) {
    result.push(sArray.splice(0, k));
  }

  while (result[result.length - 1].length < k) {
    result[result.length - 1].push(fill);
  }

  return result.map((e) => e.join(''));
}

let s = 'abcdefghi';
let k = 3;
let fill = 'x';
console.log(divideString(s, k, fill));
// Output: ["abc","def","ghi"]

s = 'abcdefghij';
k = 3;
fill = 'x';
console.log(divideString(s, k, fill));
// Output: ['abc', 'def', 'ghi', 'jxx'];

s = 'hjefcvizjkecrioqhywe';
k = 1;
fill = 's';
console.log(divideString(s, k, fill));
