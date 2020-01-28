// https://leetcode.com/problems/sort-array-by-parity
// Runtime: 80 ms, faster than 66.41% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 37.5 MB, less than 8.00% of JavaScript online submissions for Sort Array By Parity.
const sortArrayByParity = A => {
  const oddArr = []
  const returnArr = []

  A.map(item => {
    if (item % 2 === 0) {
      returnArr.push(item)
    } else {
      oddArr.push(item)
    }
  })

  return [...returnArr, ...oddArr]
}
