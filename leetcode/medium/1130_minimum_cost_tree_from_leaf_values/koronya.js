// https://leetcode.com/problems/minimum-cost-tree-from-leaf-values
// Runtime: 44 ms, faster than 98.90% of JavaScript online submissions for Minimum Cost Tree From Leaf Values.
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Minimum Cost Tree From Leaf Values.

const findMinInfo = arr => {
  const arrLen = arr.length
  let minVal = Number.MAX_SAFE_INTEGER
  let minIndex = -1
  for (let i = 0; i < arrLen; i = i + 1 | 0) {
    const num = arr[i]
    if (minVal > num) {
      minVal = num
      minIndex = i
    }
  }
  return {minVal, minIndex}
}

const mctFromLeafValues = arr => {
  let sum = 0
  while (arr.length > 1) {
    const {minVal, minIndex} = findMinInfo(arr)
    let target
    if (minIndex === 0) {
      target = arr[minIndex + 1]
    } else if (minIndex === arr.length - 1) {
      target = arr[minIndex - 1]
    } else {
      target = Math.min(arr[minIndex - 1], arr[minIndex + 1])
    }
    sum += target * minVal
    arr.splice(minIndex, 1)
  }

  return sum
}
