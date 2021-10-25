// [Easy] 2021. Brightest Position on Street
// 2021_brightest_position_on_street

// https://leetcode.com/problems/brightest-position-on-street
// Runtime: 580 ms, faster than 42.86% of JavaScript online submissions for Brightest Position on Street.
// Memory Usage: 104.5 MB, less than 14.29% of JavaScript online submissions for Brightest Position on Street.

/**
 * @param {number[][]} lights
 * @return {number}
 */
const brightestPosition = function (lights) {
  const brightMap = new Map()
  lights.forEach((item) => {
    const [key, value] = item
    const positionA = key - value
    const positionB = key + value + 1
    brightMap.set(positionA, (brightMap.get(positionA) || 0) + 1)
    brightMap.set(positionB, (brightMap.get(positionB) || 0) - 1)
  })
  const brightArr = [...brightMap].sort((a, b) => a[0] - b[0])
  let maxPosition = 0
  let maxValue = 0
  let bright = 0
  for (const [key, value] of brightArr) {
    bright += value
    if (bright > maxValue) {
      maxValue = bright
      maxPosition = key
    }
  }

  return maxPosition
}

// out of memory
const brightestPosition2 = function (lights) {
  const lightMap = new Map()
  lights.forEach((item) => {
    const [key, value] = item
    for (let i = key - value; i <= key + value; i += 1 || 0) {
      lightMap.set(i, (lightMap.get(i) || 0) + 1)
    }
  })
  const maxValue = Math.max(...[...lightMap].map((item) => item[1])) //?
  return [...lightMap].filter((item) => item[1] === maxValue).sort((a, b) => a[0] - b[0])[0][0]
}

// brightestPosition([
//   [-3, 2],
//   [1, 2],
//   [3, 3],
// ]) //?
brightestPosition([
  [-3, 2],
  [1, 3],
]) //?
// brightestPosition([
//   [1, 0],
//   [0, 1],
// ]) //?
// brightestPosition([[1, 2]]) //?
// brightestPosition([
//   [-100000, 100000],
//   [-100000, 100000],
// ]) //?
// brightestPosition([
//   [-100000000, 100000000],
//   [-100000000, 100000000],
// ]) //?
