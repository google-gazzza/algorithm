// [Medium] 1375. Bulb Switcher III
// 1375_bulb_switcher_iii

// https://leetcode.com/problems/bulb-switcher-iii
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Bulb Switcher III.
// Memory Usage: 45.1 MB, less than 100.00% of TypeScript online submissions for Bulb Switcher III.

function numTimesAllBlue(light: number[]): number {
  const lightLen: number = light.length
  let result: number = 0
  let lightTotal: number = 0
  let validThreshold: number = 0
  for (let i: number = 0; i < lightLen; i += 1) {
    lightTotal += light[i]
    validThreshold += i + 1
    if (validThreshold === lightTotal) {
      result += 1
    }
  }

  return result
}

numTimesAllBlue([2, 1, 3, 5, 4]) //?
numTimesAllBlue([3, 2, 4, 1, 5]) //?
numTimesAllBlue([4, 1, 2, 3]) //?
numTimesAllBlue([2, 1, 4, 3, 6, 5]) //?
numTimesAllBlue([1, 2, 3, 4, 5, 6]) //?
