// https://leetcode.com/problems/find-peak-element/
// Runtime: 48 ms, faster than 93.13% of JavaScript online submissions for Find Peak Element.
// Memory Usage: 33.8 MB, less than 87.50% of JavaScript online submissions for Find Peak Element.
const findPeakElement = nums => {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

// 이 풀이는 log(n)을 만족하지 않으므로 기각!
// Your solution should be in logarithmic complexity <--- 문제에 이런 메시지가 있음 ㅜㅜ
// Runtime: 52 ms, faster than 80.47% of JavaScript online submissions for Find Peak Element.
// Memory Usage: 34.4 MB, less than 12.50% of JavaScript online submissions for Find Peak Element.
const findPeakElement2 = nums => {
  const numsLen = nums.length
  let max = Number.MIN_SAFE_INTEGER
  let maxIndex = -1
  for (let i = 0; i < numsLen; i += 1) {
    const num = nums[i]
    if (num > max) {
      max = num
      maxIndex = i
    } else {
      break
    }
  }

  return maxIndex
}
