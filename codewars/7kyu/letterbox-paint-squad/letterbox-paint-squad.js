/*
letterbox-paint-squad

# codewars/7kyu/Letterbox Paint-Squad
Difficulty: 7kyu
URL: https://www.codewars.com/kata/597d75744f4190857a00008d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const paintLetterboxes = function (start, end) {
  const countMap = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  
  for (let i = start; i <= end; i += 1) {
    [...String(i)].forEach((e) => countMap[e] = countMap[e] + 1);
  }
  
  return Object.entries(countMap).map(([, value]) => value);
};

test("Example Tests", function () {
  expect(paintLetterboxes(125, 132))
    .toEqual([1, 9, 6, 3, 0, 1, 1, 1, 1, 1]);
});
