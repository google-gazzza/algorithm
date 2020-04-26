// https://leetcode.com/problems/maximum-binary-tree
// Runtime: 84 ms, faster than 97.98% of JavaScript online submissions for Maximum Binary Tree.
// Memory Usage: 41.8 MB, less than 50.00% of JavaScript online submissions for Maximum Binary Tree.

const findMaxInfo = arr => {
  const arrLen = arr.length
  let maxValue = Number.MIN_SAFE_INTEGER
  let maxIndex = -1
  for (let i = 0; i < arrLen; i = i + 1 | 0) {
    const num = arr[i]
    if (maxValue < num) {
      maxValue = num
      maxIndex = i
    }
  }
  const leftArr = arr.slice(0, maxIndex)
  const rightArr = arr.slice(maxIndex + 1, arrLen)
  return {maxValue, leftArr, rightArr}
}

const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) {
    return null
  }
  const {maxValue, leftArr, rightArr} = findMaxInfo(nums)
  const root = new TreeNode(maxValue)
  root.left = constructMaximumBinaryTree(leftArr)
  root.right = constructMaximumBinaryTree(rightArr)

  return root
}
