// https://www.codewars.com/kata/sum-mixed-array

const sumMix = (nums) => nums.reduce((acc, cur) => acc + parseInt(cur, 10), 0);

sumMix([9, 3, '7', '3']);
//?
//, 22);
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
//?
//, 42);
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']);
//?
//, 41);

// Test.describe("Example tests",_=>{
//   Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
//   Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//   Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
// });
