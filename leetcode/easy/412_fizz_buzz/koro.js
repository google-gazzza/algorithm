// https://leetcode.com/problems/fizz-buzz/
// Runtime: 60 ms, faster than 80.93% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 37.3 MB, less than 70.00% of JavaScript online submissions for Fizz Buzz.

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const arr = []
  for (let i = 1; i <= n; i += 1) {
    const isDividedBy3 = i % 3 === 0
    const isDividedBy5 = i % 5 === 0
    const value = isDividedBy3 && isDividedBy5
      ? 'FizzBuzz'
      : isDividedBy3
        ? 'Fizz'
        : isDividedBy5
          ? 'Buzz'
          : i + ''
    // arr.push(value)
    arr[i - 1] = value//위에보다 조금이라도 빠르게 하려고...
  }
  return arr
}
