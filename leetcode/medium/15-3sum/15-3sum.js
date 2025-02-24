/*
15-3sum

# leetcode/medium/15. 3Sum
Difficulty: medium
URL: https://leetcode.com/problems/3sum
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  const set = new Set;
  
  for (let i = 0; i < arr.length - 2; i += 1) {
    let sum = arr[i];
    let leftIndex = i + 1;
    let rightIndex = arr.length - 1;
    
    while (leftIndex < rightIndex) {
      if ((sum + arr[leftIndex] + arr[rightIndex]) === 0) {
        const str = String([arr[i], arr[leftIndex], arr[rightIndex]]);
        set.add(str);
      }
      
      if ((sum + arr[leftIndex] + arr[rightIndex]) < 0) {
        leftIndex += 1;
      } else {
        rightIndex -= 1;
      }
    }
  }
  
  return [...set.entries()].map((e) => {
    return e[0].split(',').map(Number);
  });
};

test('test threeSum', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(
    expect.arrayContaining([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  );
  
  expect(threeSum([])).toEqual(
    expect.arrayContaining([])
  );
  
  expect(threeSum([0])).toEqual(
    expect.arrayContaining([])
  );
  
  expect(threeSum([-2, 0, 1, 1, 2])).toEqual(
    expect.arrayContaining([
      [-2, 0, 2],
      [-2, 1, 1],
    ])
  );
  
  expect(threeSum(
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
  )).toEqual(
    expect.arrayContaining([
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ])
  );
});
