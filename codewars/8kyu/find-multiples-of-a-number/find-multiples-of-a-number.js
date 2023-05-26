/*
find-multiples-of-a-number

# codewars/8kyu/Find Multiples of a Number
Difficulty:
URL:https://www.codewars.com/kata/58ca658cc0d6401f2700045f/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function findMultiples(integer, limit) {
  const result = [];
  let currentNumber = integer;
  
  while (currentNumber <= limit) {
    result.push(currentNumber);
    currentNumber += integer;
  }
  
  return result;
}

test("findMultiples", () => {
  expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
  expect(findMultiples(1, 2)).toEqual([1, 2]);
  expect(findMultiples(5, 7)).toEqual([5]);
  expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24]);
  expect(findMultiples(11, 54)).toEqual([11, 22, 33, 44]);
});
