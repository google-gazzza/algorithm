// [Easy] 563. Binary Tree Tilt
// 563_binary_tree_tilt

// https://leetcode.com/problems/binary-tree-tilt
// Runtime: 84 ms, faster than 95.83% of JavaScript online submissions for Binary Tree Tilt.
// Memory Usage: 43.2 MB, less than 66.12% of JavaScript online submissions for Binary Tree Tilt.
const findTilt = function (root) {
  let result = 0
  const getSum = (node) => {
    if (node === null) {
      return 0
    }
    const leftSum = getSum(node.left)
    const rightSum = getSum(node.right)
    result += Math.abs(leftSum - rightSum)
    return node.val + leftSum + rightSum
  }
  getSum(root)

  return result
}
