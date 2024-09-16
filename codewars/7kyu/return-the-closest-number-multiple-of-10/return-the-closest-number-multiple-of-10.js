/*
return-the-closest-number-multiple-of-10

# codewars/7kyu/Return the closest number multiple of 10
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const closestMultiple10 = (num) => Math.round(num / 10) * 10;

describe('closestMultiple10', function () {
  test('should return 50 for num = 54', function () {
    expect(closestMultiple10(54)).toEqual(50);
  });
  
  test('should return 60 for num = 55', function () {
    expect(closestMultiple10(55)).toEqual(60);
  });
});
