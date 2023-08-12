// leetcode/easy/495. Teemo Attacking
// 495-teemo-attacking
// URL: https://leetcode.com/problems/teemo-attacking/description/

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let result = 0;

  while (timeSeries.length) {
    const current = timeSeries.shift();
    const next = timeSeries[0];

    if (next && next - current < duration) {
      result += next - current;
    } else {
      result += duration;
    }
  }

  return result;
}

let timeSeries = [1, 4];
let duration = 2;
console.log(findPoisonedDuration(timeSeries, duration));
// Output: 4

timeSeries = [1, 2];
duration = 2;
console.log(findPoisonedDuration(timeSeries, duration));
// Output: 3

