/*
split-in-parts

# codewars/7kyu/Split In Parts
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5650ab06d11d675371000003/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const splitInParts = (s, partLength) => {
  const result = [];
  
  while (s.length) {
    result.push(s.slice(0, partLength));
    s = s.slice(partLength);
  }
  
  return result.join(' ');
};

test('splitinParts', () => {
  expect(splitInParts("supercalifragilisticexpialidocious", 3))
    .toEqual("sup erc ali fra gil ist ice xpi ali doc iou s");
  expect(splitInParts("HelloKata", 1))
    .toEqual("H e l l o K a t a");
  expect(splitInParts("HelloKata", 9))
    .toEqual("HelloKata");
});
