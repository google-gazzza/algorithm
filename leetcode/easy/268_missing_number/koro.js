// https://leetcode.com/problems/missing-number
// Runtime: 88 ms, faster than 23.47% of JavaScript online submissions for Missing Number.
// Memory Usage: 37.4 MB, less than 25.72% of JavaScript online submissions for Missing Number.
const missingNumber = nums => {
  const numsLen = nums.length
  nums.sort((a, b) => a - b)
  let prevValue = nums[0]

  for (let i = 0; i < numsLen - 1; i += 1) {
    const value = nums[i + 1]

    if (value !== prevValue + 1) {
      return prevValue + 1
    }

    prevValue = value
  }

  return nums[0] === 0 ? numsLen : 0
}

// Runtime: 64 ms, faster than 60.80% of JavaScript online submissions for Missing Number.
// Memory Usage: 40.7 MB, less than 5.72% of JavaScript online submissions for Missing Number.
const missingNumber2 = nums => {
  const numsLen = nums.length
  const set = new Set()

  for (let i = 0; i < numsLen + 1; i += 1) {
    set.add(i)
  }
  nums.map(item => set.delete(item))

  return [...set][0]
}

// constant space complexity 충족은 이놈만!!!
// Runtime: 60 ms, faster than 78.71% of JavaScript online submissions for Missing Number.
// Memory Usage: 35.8 MB, less than 97.14% of JavaScript online submissions for Missing Number.
const missingNumber3 = nums => {
  const numsLen = nums.length
  const expectedSum = numsLen * (numsLen + 1) / 2
  const rest = nums.reduce((acc, cur) => (acc - cur), expectedSum)

  return rest
}
