// [Medium] 1921. Eliminate Maximum Number of Monsters
// 1921_eliminate_maximum_number_of_monsters

// https://leetcode.com/problems/eliminate-maximum-number-of-monsters
// Runtime: 275 ms, faster than 50.00% of TypeScript online submissions for Eliminate Maximum Number of Monsters.
// Memory Usage: 59 MB, less than 100.00% of TypeScript online submissions for Eliminate Maximum Number of Monsters.

function eliminateMaximum(dist: number[], speed: number[]): number {
  const arr = dist.map((item, index) => Math.ceil(item / speed[index]))
  arr.sort((a, b) => a - b)
  const arrLen = arr.length
  let count = 1
  for (let i: number = 1; i < arrLen; i += 1) {
    if (arr[i] <= i) {
      return count
    }
    count += 1
  }

  return count
}
