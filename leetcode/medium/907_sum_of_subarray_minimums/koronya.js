// [Medium] 907. Sum of Subarray Minimums
// 907_sum_of_subarray_minimums

// https://leetcode.com/problems/sum-of-subarray-minimums
// Runtime: 4924 ms, faster than 12.99% of JavaScript online submissions for Sum of Subarray Minimums.
// Memory Usage: 44.9 MB, less than 77.40% of JavaScript online submissions for Sum of Subarray Minimums.

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function (arr) {
  const arrLen = arr.length
  let sum = 0
  for (let i = 0; i < arrLen; i += 1 || 0) {
    let min = arr[i]
    for (let j = i; j < arrLen; j += 1 || 0) {
      if (min > arr[j]) {
        min = arr[j]
      }
      sum += min
    }
  }

  return sum % 1000000007
}

// TLE...TT
const sumSubarrayMins3 = function (arr) {
  const arrLen = arr.length
  let sum = 0
  const dfs = (targetIndex, min) => {
    if (targetIndex > arrLen - 1) {
      return
    }
    const newMin = Math.min(min, arr[targetIndex])
    sum += newMin
    dfs(targetIndex + 1, newMin)
  }
  for (let i = 0; i < arrLen; i += 1 || 0) {
    dfs(i, Number.MAX_SAFE_INTEGER)
  }

  return sum % 1000000007
}

// TLE...TT
const sumSubarrayMins2 = function (arr) {
  const arrLen = arr.length
  let sum = 0
  const dfs = (prev, accArr) => {
    if (accArr.length > arrLen || prev > arrLen - 1) {
      return
    }
    sum += Math.min(...accArr)
    dfs(prev + 1, [...accArr, arr[prev + 1]])
  }
  for (let i = 0; i < arrLen; i += 1 || 0) {
    dfs(i, [arr[i]])
  }

  return sum
}

// sumSubarrayMins([3, 1, 2, 4]) //?
// sumSubarrayMins([11, 81, 94, 43, 3]) //?
