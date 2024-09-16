/*
1893-check-if-all-the-integers-in-a-range-are-covered
leetcode/easy/1893. Check if All the Integers in a Range Are Covered
URL: https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isCovered(ranges: number[][], left: number, right: number): boolean {
  ranges = ranges.filter(([l1, r1]) => left <= r1 && right >= l1);
  ranges.sort(([l1], [l2]) => l1 - l2);

  if (ranges.length === 0) {
    return false;
  }

  while (ranges.length > 1) {
    const [l1, r1] = ranges.shift();
    const [l2, r2] = ranges.shift();
    if (r1 >= l2 - 1) {
      ranges.unshift([l1, Math.max(r1, r2)]);
    } else if (l1 < l2) {
      ranges.unshift([l1, r1]);
    } else {
      ranges.unshift([l2, r2]);
    }
  }

  const [l, r] = ranges[0];

  return l <= left && right <= r;
}

let ranges = [[1, 2], [3, 4], [5, 6]];
let left = 2;
let right = 5;
console.log(isCovered(ranges, left, right));
// Output: true;

ranges = [[1, 10], [10, 20]];
left = 21;
right = 21;
console.log(isCovered(ranges, left, right));

ranges = [[1, 50]];
left = 1;
right = 50;
console.log(isCovered(ranges, left, right));

ranges = [[37, 49], [5, 17], [8, 32]];
left = 29;
right = 49;
console.log(isCovered(ranges, left, right));
// false

ranges = [[25, 42], [7, 14], [2, 32], [25, 28], [39, 49], [1, 50], [29, 45], [18, 47]];
left = 15;
right = 38;
console.log(isCovered(ranges, left, right));

ranges = [[3, 3], [1, 1]];
left = 3;
right = 3;
console.log(isCovered(ranges, left, right));
