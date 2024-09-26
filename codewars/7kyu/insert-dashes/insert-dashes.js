/*
insert-dashes

# codewars/7kyu/Insert dashes
Difficulty: 7kyu
URL: https://www.codewars.com/kata/55960bbb182094bc4800007b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function insertDash(num) {
  num = String(num).split('').map(Number);
  
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
      num.splice(i + 1, 0, '-');
    }
  }
  
  return num.join('');
}

// best practice
function insertDashRegExp(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

test('insertDash', () => {
  expect(insertDash(454793)).toEqual('4547-9-3');
  expect(insertDash(123456)).toEqual('123456');
  expect(insertDash(1003567)).toEqual('1003-567');
});
