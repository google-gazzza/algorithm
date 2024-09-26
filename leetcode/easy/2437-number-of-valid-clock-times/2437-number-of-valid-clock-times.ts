/*
2437-number-of-valid-clock-times
leetcode/easy/2437. Number of Valid Clock Times
URL: https://leetcode.com/problems/number-of-valid-clock-times/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function countTime(time: string): number {
  const [hour, minute] = time.split(':');
  const [hourLeft, hourRight] = hour.split('');
  const [minuteLeft, minuteRight] = minute.split('');
  let count = 1;

  if (hourLeft === '?' && hourRight === '?') {
    count *= 24;
  } else {
    if (hourLeft === '?') {
      if (hourRight === '0' || hourRight === '1' || hourRight === '2' || hourRight === '3') {
        count *= 3;
      } else {
        count *= 2;
      }
    }
    if (hourRight === '?') {
      if (hourLeft === '0' || hourLeft === '1') {
        count *= 10;
      } else {
        count *= 4;
      }
    }
  }

  if (minuteLeft === '?') {
    count *= 6;
  }
  if (minuteRight === '?') {
    count *= 10;
  }

  return count;
}

let time = '?5:00';
console.log(countTime(time));
// Output: 2

time = '0?:0?';
console.log(countTime(time));
// Output: 100

time = '??:??';
console.log(countTime(time));

time = '2?:??';
console.log(countTime(time));
// 240
