// https://leetcode.com/problems/sort-array-by-parity-ii
// Runtime: 96 ms, faster than 73.47% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 41.6 MB, less than 27.27% of JavaScript online submissions for Sort Array By Parity II.
const sortArrayByParityII = A => {
  const halfLen = A.length / 2
  const oddArr = []
  const evenArr = []
  const resultArr = []
  A.map(item => {
    if (item % 2 === 0) {
      evenArr.push(item)
    } else {
      oddArr.push(item)
    }
  })
  for (let i = 0; i < halfLen; i = i + 1 | 0) {
    resultArr.push(evenArr[i])
    resultArr.push(oddArr[i])
  }
  return resultArr
}
