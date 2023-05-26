/*
max-array-sum

# hackerank/medium/Max Array Sum
Difficulty: medium
URL: https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dynamic-programming
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function maxSubsetSum(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Math.max((arr[i - 1] || 0), arr[i] + (arr[i - 2] || 0));
  }
  
  return arr.pop();
}

test('max array sum', () => {
  expect(maxSubsetSum([-2, 1, 3, -4, 5])).toEqual(8);
  expect(maxSubsetSum([-2, -3, -1])).toEqual(0);
  expect(maxSubsetSum([3, 7, 4, 6, 5])).toEqual(13);
  expect(maxSubsetSum([2, 1, 5, 8, 4])).toEqual(11);
  expect(maxSubsetSum([3, 5, -7, 8, 10])).toEqual(15);
});
