// [Medium] 781. Rabbits in Forest
// 781_rabbits_in_forest

// https://leetcode.com/problems/rabbits-in-forest
// Runtime: 96 ms, faster than 11.43% of JavaScript online submissions for Rabbits in Forest.
// Memory Usage: 40.7 MB, less than 42.86% of JavaScript online submissions for Rabbits in Forest.

/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function (answers) {
  let result = 0
  const numMap = new Map()
  answers.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  for (const val of numMap) {
    const [key, count] = val
    const over = Math.ceil(count / (key + 1))
    result += (key + 1) * over
  }

  return result
}

numRabbits([1, 1, 2]) //?
numRabbits([10, 10, 10]) //?

numRabbits([2, 2]) //?
numRabbits([2, 2, 2]) //?
numRabbits([2, 2, 2, 2]) //?
numRabbits([2, 2, 2, 2, 2, 2]) //?
numRabbits([2, 2, 2, 2, 2, 2, 2]) //?
