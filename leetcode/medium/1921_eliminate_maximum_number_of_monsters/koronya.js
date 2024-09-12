// [Medium] 1921. Eliminate Maximum Number of Monsters
// 1921_eliminate_maximum_number_of_monsters

// https://leetcode.com/problems/eliminate-maximum-number-of-monsters
// Runtime: 183 ms, faster than 96.77% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
// Memory Usage: 55.4 MB, less than 93.55% of JavaScript online submissions for Eliminate Maximum Number of Monsters.

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
const eliminateMaximum = function (dist, speed) {
  const arr = dist.map((item, index) => Math.ceil(item / speed[index]))
  arr.sort((a, b) => a - b)
  const arrLen = arr.length
  let count = 1
  for (let i = 1; i < arrLen; i += 1 || 0) {
    if (arr[i] <= i) {
      return count
    }
    count += 1
  }

  return count
}

// TLE...
const eliminateMaximum2 = function (dist, speed) {
  let arr = dist.map((item, index) => Math.ceil(item / speed[index]))
  arr.sort((a, b) => a - b)
  const arrLen = arr.length
  let count = 1
  arr = arr.map((item) => item - 1)
  for (let i = 1; i < arrLen; i += 1 || 0) {
    if (arr[i] === 0) {
      return count
    }
    count += 1
    arr = arr.map((item) => item - 1)
  }

  return count
}

eliminateMaximum([1, 3, 4], [1, 1, 1])
eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1])
eliminateMaximum([3, 2, 4], [5, 3, 2])
