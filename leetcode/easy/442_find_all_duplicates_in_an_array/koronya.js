// https://leetcode.com/problems/find-all-duplicates-in-an-array/
// Runtime: 92 ms, faster than 96.68% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 43.7 MB, less than 100.00% of JavaScript online submissions for Find All Duplicates in an Array.
const findDuplicates = nums => {
  const resultArr = []
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    const absNum = Math.abs(nums[i])
    const lookIndex = absNum - 1
    nums[lookIndex] = -nums[lookIndex]
    if (nums[lookIndex] > 0) {
      resultArr.push(absNum)
    }
  }

  return resultArr
}

// Could you do it without extra space and in O(n) runtime?
// 즉, 아래 풀이로 풀면 안됨!!! 그러면 easy였겠지...
// Runtime: 120 ms, faster than 57.35% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 53.7 MB, less than 50.00% of JavaScript online submissions for Find All Duplicates in an Array.
const findDuplicates3 = nums => {
  const numSet = new Set()
  const resultArr = []
  nums.map(num => {
    if (numSet.has(num)) {
      resultArr.push(num)
    } else {
      numSet.add(num)
    }
  })
  return resultArr
}
