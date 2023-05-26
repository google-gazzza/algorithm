// https://leetcode.com/problems/squares-of-a-sorted-array/
// Runtime: 96 ms, faster than 98.18% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 42.2 MB, less than 96.30% of JavaScript online submissions for Squares of a Sorted Array.
const sortedSquares = A => {
  let left = 0
  let right = A.length - 1
  const resultArr = []
  while (left <= right) {
    const leftVal = A[left] ** 2
    const rightVal = A[right] ** 2
    if (leftVal < rightVal) {
      resultArr.push(rightVal)
      right -= 1
    } else {
      resultArr.push(leftVal)
      left += 1
    }
  }
  return resultArr.reverse()
}

// Runtime: 136 ms, faster than 59.87% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 44.1 MB, less than 11.11% of JavaScript online submissions for Squares of a Sorted Array.
const sortedSquares2 = A => A.map(item => item ** 2).sort((a, b) => a - b)
