/*
if-you-cant-sleep-just-count-sheep

# codewars/8kyu/If you can't sleep, just count sheep!!
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const countSheep = function (num) {
  let result = [];
  
  for(let i=0;i<num;i+=1) {
    result.push(`${i+1} sheep...`)
  }
  
  return result.join('');
};

test('countSheep', () => {
  expect(countSheep(1)).toEqual("1 sheep...");
  expect(countSheep(2)).toEqual("1 sheep...2 sheep...");
  expect(countSheep(3)).toEqual("1 sheep...2 sheep...3 sheep...");
})
