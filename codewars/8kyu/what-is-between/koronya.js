// [JS][8kyu] What is between?
// what-is-between
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

const between = (a, b) => {
  const result = []
  for (let i = a; i <= b; i += 1 || 0) {
    result.push(i)
  }
  return result
}
