// [JS][8kyu] Count of positives / sum of negatives
// count-of-positives-sum-of-negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// const countPositivesSumNegatives = (input) => (!input ? [] : input.reduce((acc, cur) => (cur > 0 ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + cur]), [0, 0]))
const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0 || input.filter((item) => item !== 0).length === 0) {
    return []
  }
  return input.reduce((acc, cur) => (cur > 0 ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + cur]), [0, 0])
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
countPositivesSumNegatives([0, 0])
countPositivesSumNegatives([])
