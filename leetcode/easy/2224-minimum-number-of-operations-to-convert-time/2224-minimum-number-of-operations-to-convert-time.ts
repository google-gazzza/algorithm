/*
2224-minimum-number-of-operations-to-convert-time
leetcode/easy/2224. Minimum Number of Operations to Convert Time
URL: https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function parseTimeToMinutes(time): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function convertTime(current: string, correct: string): number {
  const currentTime = parseTimeToMinutes(current);
  const correctTime = parseTimeToMinutes(correct);
  let diff = correctTime - currentTime;
  let count = 0;

  while (diff > 0) {
    if (diff >= 60) {
      count += 1;
      diff -= 60;
      continue;
    }
    if (diff >= 15) {
      count += 1;
      diff -= 15;
      continue;
    }

    if (diff >= 5) {
      count += 1;
      diff -= 5;
      continue;
    }

    if (diff > 0) {
      count += 1;
      diff -= 1;
      continue;
    }
  }

  return count;
};

let current = '02:30';
let correct = '04:35';
console.log(convertTime(current, correct));

current = '11:00';
correct = '11:01';
console.log(convertTime(current, correct));
// Output: 1
// Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.
