// [Medium] 525. Contiguous Array
// 525_contiguous_array

// https://leetcode.com/problems/contiguous-array
// Runtime: 120 ms, faster than 92.21% of JavaScript online submissions for Contiguous Array.
// Memory Usage: 44.9 MB, less than 74.02% of JavaScript online submissions for Contiguous Array.
const findMaxLength = nums => {
  const numsLen = nums.length
  const startMap = new Map()
  let sum = 0
  let maxLength = 0
  startMap.set(0, -1)

  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    let value = nums[i] === 0 ? -1 : 1
    sum += value
    if (startMap.has(sum)) {
      let index = startMap.get(sum)
      maxLength = Math.max(maxLength, i - index)
    } else {
      startMap.set(sum, i)
    }
  }

  return maxLength
}

// 이렇게 풀면...
// Time Limit Exceeded ㅜㅜ
const findMaxLength2 = nums => {
  const convertedNums = nums.map(num => num === 0 ? -1 : 1)
  const convertedNumsLen = convertedNums.length
  let maxLength = 0

  const dfs = (last, sum = 0, length = 0) => {
    if (sum === 0) {
      maxLength = Math.max(maxLength, length)
    }

    if (last < convertedNumsLen - 1) {
      const nextIndex = last + 1
      dfs(nextIndex, sum + convertedNums[nextIndex], length + 1)
    }
  }

  for (let i = 0; i < convertedNumsLen; i = i + 1 | 0) {
    dfs(i, convertedNums[i], 1)
  }

  return maxLength
}
