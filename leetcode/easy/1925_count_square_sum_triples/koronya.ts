// [Easy] 1925. Count Square Sum Triples
// 1925_count_square_sum_triples

// https://leetcode.com/problems/count-square-sum-triples
// Runtime: 92 ms, faster than 58.82% of TypeScript online submissions for Count Square Sum Triples.
// Memory Usage: 41.2 MB, less than 11.76% of TypeScript online submissions for Count Square Sum Triples.


function countTriples(n: number): number {
  let count: number = 0
  const squareSet = new Set<number>()
  for (let i: number = 2; i <= n; i += 1) {
    squareSet.add(i ** 2)
  }
  for (let i: number = 2; i <= n; i += 1) {
    const a: number = i
    for (let j: number = i + 1; j <= n; j += 1) {
      const b: number = j
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
