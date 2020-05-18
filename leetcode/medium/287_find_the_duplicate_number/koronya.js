// https://leetcode.com/problems/find-the-duplicate-number/
// Runtime: 56 ms, faster than 77.90% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions for Find the Duplicate Number.
// Floyd's cycle detection을 이용! 토끼와 거북이!
const findDuplicate = nums => {
  const numsLen = nums.length
  let turtle = numsLen
  let rabbit = numsLen
  do {
    turtle = nums[turtle - 1]
    rabbit = nums[nums[rabbit - 1] - 1]
  } while (turtle !== rabbit)

  turtle = numsLen
  while (turtle !== rabbit) {
    turtle = nums[turtle - 1]
    rabbit = nums[rabbit - 1]
  }

  return turtle
}

// Runtime: 100 ms, faster than 21.09% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 36.7 MB, less than 28.57% of JavaScript online submissions for Find the Duplicate Number.
// 이렇게 풀면 쉽지만, 문제의 요구사항과 맞지 않다.
// You must use only constant, O(1) extra space!!!
const findDuplicate2 = nums => {
  const numsLen = nums.length
  const numsSet = new Set()
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    const num = nums[i]
    if (numsSet.has(num)) {
      return num
    }
    numsSet.add(num)
  }
}
