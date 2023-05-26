// [Medium] 179. Largest Number
// 179_largest_number

// https://leetcode.com/problems/largest-number
// Runtime: 80 ms, faster than 93.16% of JavaScript online submissions for Largest Number.
// Memory Usage: 40.1 MB, less than 87.45% of JavaScript online submissions for Largest Number.
const sortFnc = (a, b) => {
  const strA = String(a)
  const strB = String(b)
  if (Number(strA + strB) < Number(strB + strA)) {
    return 1
  } else {
    return -1
  }
}

const largestNumber = function (nums) {
  if (nums.every(num => num === 0)) {
    return '0'
  }
  nums.sort(sortFnc)
  return nums.join('')
}
