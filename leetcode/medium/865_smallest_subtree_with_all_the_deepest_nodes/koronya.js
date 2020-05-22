// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes
// Runtime: 52 ms, faster than 94.96% of JavaScript online submissions for Smallest Subtree with all the Deepest Nodes.
// Memory Usage: 35.6 MB, less than 50.00% of JavaScript online submissions for Smallest Subtree with all the Deepest Nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = root => {
  const parentMap = new Map()
  const levelMap = new Map()
  const preOrder = (root, parent = null, level = 0) => {
    if (root == null) {
      return
    }
    parentMap.set(root, parent)
    if (levelMap.has(level)) {
      levelMap.get(level).push(root)
    } else {
      levelMap.set(level, [root])
    }
    preOrder(root.left, root, level + 1)
    preOrder(root.right, root, level + 1)
  }
  preOrder(root)

  const levelArr = [...levelMap]
  const lastRow = levelArr[levelArr.length - 1]
  const [levelKey, lastNodeArr] = lastRow
  const lastNodeArrLen = lastNodeArr.length
  if (lastNodeArrLen === 1) {
    return lastNodeArr[0]
  }

  let targetArr = lastNodeArr
  while (!targetArr.every(node => node === targetArr[0])) {
    targetArr = targetArr.map(node => parentMap.get(node))
  }

  return targetArr[0]
}
