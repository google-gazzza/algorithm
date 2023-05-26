// [Medium] 475. Heaters
// 475_heaters

// https://leetcode.com/problems/heaters
// Runtime: 1953 ms, faster than 6.75% of JavaScript online submissions for Heaters.
// Memory Usage: 45.4 MB, less than 100.00% of JavaScript online submissions for Heaters.

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function (houses, heaters) {
  let max = 0
  houses.forEach((item) => {
    const now = heaters.reduce((acc, cur) => (acc > Math.abs(cur - item) ? Math.abs(cur - item) : acc), Number.MAX_SAFE_INTEGER)
    max = Math.max(now, max)
  })
  return max
}

// Runtime: 2251 ms, faster than 5.40% of JavaScript online submissions for Heaters.
// Memory Usage: 46.5 MB, less than 67.57% of JavaScript online submissions for Heaters.
const findRadius2 = function (houses, heaters) {
  const distanceArr = houses.map((item) => heaters.reduce((acc, cur) => (acc > Math.abs(cur - item) ? Math.abs(cur - item) : acc), Number.MAX_SAFE_INTEGER))
  return Math.max(...distanceArr)
}

// TLE
const findRadius3 = function (houses, heaters) {
  let result = 0
  const houseSet = new Set(houses)
  heaters.forEach((item) => {
    houseSet.delete(item)
  })
  while (houseSet.size > 0) {
    result += 1
    heaters.forEach((item) => {
      houseSet.delete(item - result)
      houseSet.delete(item + result)
    })
  }

  return result
}

findRadius([1, 2, 3], [2])
findRadius([1, 2, 3, 4], [1, 4])
findRadius([1, 5], [2])
