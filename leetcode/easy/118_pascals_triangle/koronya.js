// https://leetcode.com/problems/pascals-triangle
// Runtime: 44 ms, faster than 97.39% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 33.9 MB, less than 23.08% of JavaScript online submissions for Pascal's Triangle.
const generate = numRows => {
  const arr = []
  for (let i = 1; i < numRows + 1; i += 1) {
    arr.push(getNArr(i))
  }
  return arr
}

const nMap = new Map()

const getNArr = n => {
  if (nMap.has(n)) {
    return nMap.get(n)
  }
  if (n === 1) {
    nMap.set(1, [1])
    return nMap.get(1)
  }
  if (n === 2) {
    nMap.set(2, [1, 1])
    return nMap.get(2)
  }

  const returnArr = [1]
  const beforeArr = getNArr(n - 1)
  const beforeArrLen = beforeArr.length
  for (let i = 0; i < beforeArrLen - 1; i += 1) {
    returnArr.push(beforeArr[i] + beforeArr[i + 1])
  }
  returnArr.push(1)
  
  nMap.set(n, returnArr)
  return returnArr
}
