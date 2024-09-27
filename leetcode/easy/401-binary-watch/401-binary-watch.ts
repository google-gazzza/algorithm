// leetcode/easy/401. Binary Watch
// 401-binary-watch
// URL: https://leetcode.com/problems/binary-watch/description/

function sumArr(array: number[]): number {
  return array.reduce((acc, cur) => acc + cur, 0);
}

function readBinaryWatch(totalTurnedOnTarget: number): string[] {
  const hours = [8, 4, 2, 1];
  const minutes = [32, 16, 8, 4, 2, 1];
  const result = [];

  for (let hourTurnedLedCount = 0; hourTurnedLedCount < Math.min(totalTurnedOnTarget + 1, 5); hourTurnedLedCount += 1) {
    const hourCandidates: Set<number> = new Set();
    let hourCandidate: number;

    function calculateHourCandidates(hourLedCount, nums: number[], recursionCount, prefix = []) {
      if (hourLedCount === 0) {
        return;
      }

      if (recursionCount === hourLedCount) {
        hourCandidate = sumArr(prefix);

        if (hourCandidate < 12) {
          hourCandidates.add(sumArr(prefix));
        }
        return;
      }

      if (recursionCount < hourLedCount) {
        for (let j = 0; j < nums.length; j += 1) {
          const targetMiddleIndex = j < 1 ? 0 : j - 1;
          const nextNums = [...nums.slice(0, targetMiddleIndex), ...nums.slice(Math.min(j + 1, nums.length))];
          const nextPrefix = [...prefix, nums[j]];

          calculateHourCandidates(hourLedCount, nextNums, recursionCount + 1, nextPrefix);
        }
      }
    }

    calculateHourCandidates(hourTurnedLedCount, hours, 0, []);

    const minuteTurnedOn = totalTurnedOnTarget - hourTurnedLedCount;

    function calculateMinutes(minuteTurnedLedTarget, nums: number[], minuteTurnedOnCount: number, prefix = []) {
      if (totalTurnedOnTarget === hourTurnedLedCount + minuteTurnedOnCount) {
        const minuteCandidate = sumArr(prefix);

        if (minuteCandidate < 60) {
          const minStr = minuteCandidate.toString().padStart(2, '0');

          if (hourCandidates.size === 0 && hourTurnedLedCount === 0) {
            result.push(`0:${minStr}`);
          } else {
            hourCandidates.forEach((hour) => {
              if (hour < 12) {
                result.push(`${hour}:${minStr}`);
              }
            });
          }
        }

        return;
      }

      if (minuteTurnedOnCount < minuteTurnedLedTarget) {
        for (let i = 0; i < nums.length; i += 1) {
          const targetIndex = i < 1 ? 0 : i - 1;
          const nextNums = [...nums.slice(0, targetIndex), ...nums.slice(i + 1)];
          const nextPrefix = [...prefix, nums[i]];

          calculateMinutes(minuteTurnedLedTarget, nextNums, minuteTurnedOnCount + 1, nextPrefix);
        }
      }
    }

    calculateMinutes(minuteTurnedOn, minutes, 0, []);
  }

  return Array.from(new Set(result));
};

