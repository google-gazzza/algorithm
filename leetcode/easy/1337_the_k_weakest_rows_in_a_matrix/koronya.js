// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix
// Runtime: 52 ms, faster than 98.27% of JavaScript online submissions for The K Weakest Rows in a Matrix.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for The K Weakest Rows in a Matrix.

const ascSort = (a, b) => {
  if (a.count > b.count) {
    return 1
  } else if (a.count < b.count) {
    return -1
  } else {
    if (a.index > b.index) {
      return 1
    } else if (a.index < b.index) {
      return -1
    } else {
      return 0
    }
  }
}

const kWeakestRows = (mat, k) => {
  const soldiersArr = mat.map((row, index) => {
    const colLen = row.length
    let count = 0
    for (let i = 0; i < colLen; i = i + 1 | 0) {
      if (row[i] === 1) {
        count += 1
      } else {
        break
      }
    }
    return {count, index}
  })
  soldiersArr.sort(ascSort)
  const resultArr = []
  for (let i = 0; i < k; i = i + 1 | 0) {
    resultArr.push(soldiersArr[i].index)
  }
  return resultArr
}
