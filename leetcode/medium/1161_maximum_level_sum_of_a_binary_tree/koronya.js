// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
// Runtime: 244 ms, faster than 10.63% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 57.1 MB, less than 100.00% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.

const maxLevelSum = root => {
  const levelMap = new Map()
  const preOrder = (root, level = 0) => {
    if (root == null) {
      return
    }
    const val = root.val
    if (levelMap.has(level)) {
      levelMap.get(level).push(val)
    } else {
      levelMap.set(level, [val])
    }
    preOrder(root.left, level + 1)
    preOrder(root.right, level + 1)
  }
  preOrder(root)

  let maxValue = Number.MIN_SAFE_INTEGER
  let maxIndex = -1
  for (const [key, arr] of levelMap) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    if (sum > maxValue) {
      maxValue = sum
      maxIndex = key
    }
  }

  return maxIndex + 1
}
