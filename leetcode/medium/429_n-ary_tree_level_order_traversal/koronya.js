// https://leetcode.com/problems/n-ary-tree-level-order-traversal
// Runtime: 88 ms, faster than 20.75% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 40.3 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Level Order Traversal.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = root => {
  const levelMap = new Map()
  const preOrder = (root, level = 0) => {
    if (root === null) {
      return
    }
    const val = root.val
    if (levelMap.has(level)) {
      levelMap.get(level).push(val)
    } else {
      levelMap.set(level, [val])
    }
    if (root.children) {
      root.children.map(item => {
        preOrder(item, level + 1)
      })
    }
  }
  preOrder(root)

  const resultArr = []
  for (const [key, arr] of levelMap) {
    resultArr.push(arr)
  }
  return resultArr
}
