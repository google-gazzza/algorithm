// leetcode/medium/739. Daily Temperatures
// 739-daily-temperatures
// URL: https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  let stack = [[temperatures[0], 0]];
  let result = new Array(temperatures.length).fill(0);

  for (let i = 1; i < temperatures.length; i += 1) {
    const [lastValue, lastIndex] = stack[stack.length - 1];

    if (lastValue < temperatures[i]) {
      stack.push([temperatures[i], i]);
      const dayDiff = i - lastIndex;
      result[lastIndex] = dayDiff;
    }
  }

  stack = [[temperatures[temperatures.length - 1], temperatures.length - 1]];

  for (let i = temperatures.length - 2; i > 0; i -= 1) {
    while (stack.length > 0 && stack[stack.length - 1][0] <= temperatures[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      stack.push([temperatures[i], i]);
      continue;
    }

    const [, lastIndex] = stack[stack.length - 1];

    stack.push([temperatures[i], i]);
    const dayDiff = lastIndex - i;
    result[i] = dayDiff;
  }

  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
// Output: [1,1,4,2,1,1,0,0]

temperatures = [30, 40, 50, 60];
console.log(dailyTemperatures(temperatures));
// Output: [1,1,1,0]

temperatures = [30, 60, 90];
console.log(dailyTemperatures(temperatures));
// Output: [1,1,0]

temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log(dailyTemperatures(temperatures));
// [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
