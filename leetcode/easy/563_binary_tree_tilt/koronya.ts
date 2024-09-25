// [Easy] 563. Binary Tree Tilt
// 563_binary_tree_tilt

// https://leetcode.com/problems/binary-tree-tilt
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Binary Tree Tilt.
// Memory Usage: 44.3 MB, less than 91.80% of TypeScript online submissions for Binary Tree Tilt.
function findTilt (root: TreeNode | null): number {
  let result: number = 0
  const getSum = (node: TreeNode | null): number => {
    if (node === null) {
      return 0
    }
    const leftSum: number = getSum(node.left)
    const rightSum: number = getSum(node.right)
    result += Math.abs(leftSum - rightSum)
    return node.val + leftSum + rightSum
  }
  getSum(root)

  return result
}
