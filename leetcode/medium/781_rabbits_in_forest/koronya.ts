// [Medium] 781. Rabbits in Forest
// 781_rabbits_in_forest

// https://leetcode.com/problems/rabbits-in-forest
// Runtime: 106 ms, faster than 100.00% of TypeScript online submissions for Rabbits in Forest.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Rabbits in Forest.

function numRabbits(answers: number[]): number {
  let result: number = 0
  const numMap = new Map<number, number>()
  answers.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  for (const val of numMap) {
    const [key, count] = val
    const over = Math.ceil(count / (key + 1))
    result += (key + 1) * over
  }

  return result
}
