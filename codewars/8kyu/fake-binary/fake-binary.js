/*
fake-binary

# codewars/8kyu/Fake Binary
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57eae65a4321032ce000002d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function fakeBin(input) {
  return [...input].map((e) => Number(e) < 5 ? '0' : '1')
    .join('');
}

test("Example tests", () => {
  expect(fakeBin('45385593107843568')).toEqual('01011110001100111');
  expect(fakeBin('509321967506747')).toEqual('101000111101101');
  expect(fakeBin('366058562030849490134388085')).toEqual('011011110000101010000011011');
});

module.exports = {
  fakeBin,
};
