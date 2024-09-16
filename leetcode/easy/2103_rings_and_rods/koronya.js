// [Easy] 2103. Rings and Rods
// 2103_rings_and_rods

// https://leetcode.com/problems/rings-and-rods
// Runtime: 63 ms, faster than 96.36% of JavaScript online submissions for Rings and Rods.
// Memory Usage: 38.5 MB, less than 83.64% of JavaScript online submissions for Rings and Rods.

/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function (rings) {
  const ringsLen = rings.length / 2
  const rodMap = new Map()
  for (let i = 0; i < ringsLen; i += 1 || 0) {
    const color = rings[2 * i]
    const position = rings[2 * i + 1]
    if (rodMap.has(position) === true) {
      rodMap.get(position).add(color)
    } else {
      rodMap.set(position, new Set([color]))
    }
  }
  return [...rodMap].filter((item) => item[1].size === 3).length
}

countPoints('B0B6G0R6R0R6G9') //?
countPoints('B0R0G0R9R0B0G0') //?
