/*
complete-the-pattern-6-odd-ladder

# codewars/7kyu/Complete The Pattern #6 - Odd Ladder
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5574940eae1cf7d520000076/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function pattern(n) {
  const result = [];
  
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 1) {
      result.push(String(i).repeat(i));
    }
  }
  
  return result.join('\n');
}

test("Example Tests", function () {
  expect(pattern(4)).toEqual("1\n333");
  expect(pattern(1)).toEqual("1");
  expect(pattern(5)).toEqual("1\n333\n55555");
  expect(pattern(0)).toEqual("");
  expect(pattern(-25)).toEqual("");
});
