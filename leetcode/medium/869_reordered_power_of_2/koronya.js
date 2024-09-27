// [Medium] 869. Reordered Power of 2
// 869_reordered_power_of_2

// https://leetcode.com/problems/reordered-power-of-2
// Runtime: 2216 ms, faster than 11.11% of JavaScript online submissions for Reordered Power of 2.
// Memory Usage: 44.8 MB, less than 16.67% of JavaScript online submissions for Reordered Power of 2.

const powerOf2Arr = Array.from({ length: 30 }).map((_, index) => 2 ** index)

const isPowerOf2 = (str) => powerOf2Arr.includes(Number(str))

/**
 * @param {number} N
 * @return {boolean}
 */
const reorderedPowerOf2 = function (N) {
  const NArr = String(N).split('')
  const NArrLen = NArr.length
  let trueFlag = false

  const dfs = (arr, restArr) => {
    if (trueFlag === true) {
      return true
    }
    if (arr.length === NArrLen) {
      if (isPowerOf2(arr.reduce((acc, cur) => acc + cur, '')) === true) {
        trueFlag = true
      }
    } else {
      const restArrLen = restArr.length
      for (let i = 0; i < restArrLen; i += 1 || 0) {
        const duplicateArr = [...restArr]
        const item = duplicateArr.splice(i, 1)[0]
        dfs([...arr, item], duplicateArr)
      }
    }
  }

  for (let i = 0; i < NArrLen; i += 1 || 0) {
    const duplicateArr = [...NArr]
    const item = duplicateArr.splice(i, 1)[0]
    if (item !== '0') {
      dfs([item], duplicateArr)
    }
  }

  return trueFlag
}

// reorderedPowerOf2(1) //?
// reorderedPowerOf2(10) //?
// reorderedPowerOf2(16) //?
// reorderedPowerOf2(24) //?
// reorderedPowerOf2(46) //?
// reorderedPowerOf2(1521) //?
// reorderedPowerOf2(453686452) //?
