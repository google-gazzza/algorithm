// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
// Runtime: 48 ms, faster than 92.34% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
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
const bstToGst = root => {
  const originalValArr = []
  const setOriginalValArr = node => {
    if (node !== null) {
      setOriginalValArr(node.left)
      setOriginalValArr(node.right)
      originalValArr.push(node.val)
    }
  }
  const getSumOfGreaterThanNum = num => originalValArr.filter(val => val >= num).reduce((acc, cur) => acc + cur, 0)
  const modifyNode = node => {
    if (node !== null) {
      modifyNode(node.left)
      modifyNode(node.right)
      node.val = getSumOfGreaterThanNum(node.val)
    }
  }

  setOriginalValArr(root)
  originalValArr.sort((a, b) => a - b)
  modifyNode(root)

  return root
}
