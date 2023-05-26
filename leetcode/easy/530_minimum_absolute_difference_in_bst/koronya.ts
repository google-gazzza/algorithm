// [Easy] 530. Minimum Absolute Difference in BST
// 530_minimum_absolute_difference_in_bst

// https://leetcode.com/problems/minimum-absolute-difference-in-bst
// Runtime: 92 ms, faster than 85.71% of TypeScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 44.8 MB, less than 57.14% of TypeScript online submissions for Minimum Absolute Difference in BST.
function getMinimumDifference (root: TreeNode | null): number {
  const sortedArr: number[] = []
  const inOrderTraversal = (node: TreeNode | null) => {
    if (node === null) {
      return
    }
    inOrderTraversal(node.left)
    sortedArr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)
  const sortedArrLen: number = sortedArr.length
  let minDiff: number = Number.MAX_SAFE_INTEGER
  for (let i: number = 1; i < sortedArrLen; i += 1) {
    minDiff = Math.min(sortedArr[i] - sortedArr[i - 1], minDiff)
  }

  return minDiff
}
