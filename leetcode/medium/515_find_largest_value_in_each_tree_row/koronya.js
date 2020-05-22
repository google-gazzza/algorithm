// https://leetcode.com/problems/find-largest-value-in-each-tree-row
// Runtime: 60 ms, faster than 97.44% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for Find Largest Value in Each Tree Row.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = root => {
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

  const resultArr = []
  for (const [key, valArr] of levelMap) {
    resultArr.push(valArr.reduce((acc, cur) => acc < cur ? cur : acc, Number.MIN_SAFE_INTEGER))
  }

  return resultArr
}
