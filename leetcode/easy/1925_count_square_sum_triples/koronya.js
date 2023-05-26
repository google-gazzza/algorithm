// [Easy] 1925. Count Square Sum Triples
// 1925_count_square_sum_triples

// https://leetcode.com/problems/count-square-sum-triples
// Runtime: 80 ms, faster than 88.65% of JavaScript online submissions for Count Square Sum Triples.
// Memory Usage: 40.8 MB, less than 19.46% of JavaScript online submissions for Count Square Sum Triples.

/**
 * @param {number} n
 * @return {number}
 */
const countTriples = function (n) {
  let count = 0
  const squareSet = new Set()
  for (let i = 2; i <= n; i += 1 || 0) {
    squareSet.add(i ** 2)
  }
  for (let i = 2; i <= n; i += 1 || 0) {
    const a = i
    for (let j = i + 1; j <= n; j += 1 || 0) {
      const b = j
      if (squareSet.has(a ** 2 + b ** 2)) {
        count += 2
      }
    }
  }

  return count
}

countTriples(5) //?
countTriples(10) //?
countTriples(250) //?
