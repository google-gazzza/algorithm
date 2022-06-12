// [Easy] 163. Missing Ranges
// 163_missing_ranges

// https://leetcode.com/problems/missing-ranges
// Runtime: 64 ms, faster than 83.17% of JavaScript online submissions for Missing Ranges.
// Memory Usage: 41.6 MB, less than 97.46% of JavaScript online submissions for Missing Ranges.

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function (nums, lower, upper) {
  const numsLen = nums.length
  if (upper - lower + 1 === numsLen) {
    return []
  }
  const resultArr = []
  let targetStart = lower
  let targetEnd = upper
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    if (num === targetStart) {
      targetStart = num + 1
    } else {
      break
    }
  }
  for (let i = numsLen - 1; i >= 0; i -= 1 || 0) {
    const num = nums[i]
    if (num === targetEnd) {
      targetEnd = num - 1
    } else {
      break
    }
  }
  const filteredNums = nums.filter((num) => num >= targetStart && num <= targetEnd)
  let prevTarget = targetStart
  filteredNums.forEach((num) => {
    if (num - prevTarget === 1) {
      resultArr.push(String(prevTarget))
    } else if (num !== prevTarget) {
      resultArr.push(`${prevTarget}->${num - 1}`)
    }
    prevTarget = num + 1
  })
  if (prevTarget === targetEnd) {
    resultArr.push(`${prevTarget}`)
  } else {
    resultArr.push(`${prevTarget}->${targetEnd}`)
  }

  return resultArr
}

// TLE...
const findMissingRanges2 = function (nums, lower, upper) {
  const resultArr = []
  let prev = false
  let startNum = 0
  let endNum = 0
  for (let i = lower; i <= upper; i += 1 || 0) {
    if (nums.includes(i) === false) {
      if (prev === false) {
        startNum = i
      }
      prev = true
      endNum = i
    } else {
      if (prev === true) {
        if (startNum === endNum) {
          resultArr.push(String(startNum))
        } else {
          resultArr.push(`${startNum}->${endNum}`)
        }
      }
      prev = false
    }
  }
  if (prev === true) {
    if (startNum === endNum) {
      resultArr.push(String(startNum))
    } else {
      resultArr.push(`${startNum}->${endNum}`)
    }
  }

  return resultArr
}

findMissingRanges([0, 1, 3, 50, 75], 0, 10)
findMissingRanges([0, 1, 3, 50, 75], 0, 99)
findMissingRanges([0, 1, 3, 50, 75], 0, 76)
findMissingRanges([0, 1, 3, 50, 99], 0, 99)
findMissingRanges([-1], -1, -1)
findMissingRanges([], 1, 1)
findMissingRanges([1, 2], 0, 9)
