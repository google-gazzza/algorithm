// [JS][6kyu] Shortest steps to a number
// shortest-steps-to-a-number
// https://www.codewars.com/kata/5cd4aec6abc7260028dcd942/train/javascript

const shortestStepsToNum = (num) => {
  let steps = 0
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
    steps += 1
  }
  return steps
}

shortestStepsToNum(1) === 0
shortestStepsToNum(12) === 4
shortestStepsToNum(16) === 4
shortestStepsToNum(71) === 9
