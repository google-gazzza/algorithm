/*
56-merge-intervals

# leetcode/medium/56. Merge Intervals
Difficulty: medium
URL: https://leetcode.com/problems/merge-intervals/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const merge = (intervals) => {
  intervals.sort((target, cur) => target[0] - cur[0]);
  
  for (let i = 0; i < intervals.length - 1; i += 1) {
    const [leftBegin, leftEnd] = intervals[i];
    const [rightBegin, rightEnd] = intervals[i + 1];
    
    if (rightBegin <= leftEnd) {
      intervals[i] = [Math.min(leftBegin, rightBegin), Math.max(leftEnd, rightEnd)];
      intervals.splice(i + 1, 1);
      i -= 1;
    }
  }
  
  return intervals;
};

test('test merge', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
  expect(merge([[1, 4], [4, 5]])).toStrictEqual([[1, 5]]);
});
