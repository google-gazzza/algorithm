// [Easy] 985. Sum of Even Numbers After Queries
// 985_sum_of_even_numbers_after_queries

// https://leetcode.com/problems/sum-of-even-numbers-after-queries
// Runtime: 120 ms, faster than 94.15% of JavaScript online submissions for Sum of Even Numbers After Queries.
// Memory Usage: 46.4 MB, less than 69.15% of JavaScript online submissions for Sum of Even Numbers After Queries.

// const sumOfEvenNumbers = (acc, cur) => (cur % 2 === 0 ? acc + cur : acc)

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
 const sumEvenAfterQueries = function (A, queries) {
  let sumOfEvenNumbers = A.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0)
  let targetArr = A
  const resultArr = []
  queries.forEach((item) => {
    const [value, index] = item
    const before = targetArr[index]
    const next = before + value
    if (value % 2 !== 0) {
      if (before % 2 !== 0) {
        sumOfEvenNumbers += next
        resultArr.push(sumOfEvenNumbers)
      } else {
        sumOfEvenNumbers -= before
        resultArr.push(sumOfEvenNumbers)
      }
    } else {
      if (before % 2 === 0) {
        sumOfEvenNumbers += value
        resultArr.push(sumOfEvenNumbers)
      } else {
        resultArr.push(sumOfEvenNumbers)
      }
    }
    targetArr[index] = next
  })

  return resultArr
}

sumEvenAfterQueries(
  [1, 2, 3, 4],
  [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3],
  ],
) //?

const sumOfEvenNumbers = (acc, cur) => (cur % 2 === 0 ? acc + cur : acc)

// Time Limit Exceeded!
const sumEvenAfterQueries2 = function (A, queries) {
  const resultArr = []
  let targetArr = A
  queries.map((item) => {
    const [value, index] = item
    targetArr[index] += value
    resultArr.push(targetArr.reduce(sumOfEvenNumbers, 0))
  })

  return resultArr
}
