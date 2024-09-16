// [Easy] 653. Two Sum IV - Input is a BST
// 653_two_sum_iv_-_input_is_a_bst

// https://leetcode.com/problems/two-sum-iv-input-is-a-bst
// Runtime: 108 ms, faster than 90.91% of TypeScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 48 MB, less than 45.45% of TypeScript online submissions for Two Sum IV - Input is a BST.
function findTarget(root: TreeNode | null, k: number): boolean {
  const sortedArr: number[] = []
  const preOrderTraversal = (node: TreeNode | null): void => {
    if (node == undefined) {
      return
    }
    preOrderTraversal(node.left)
    sortedArr.push(node.val)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(root)

  const sortedArrLen: number = sortedArr.length
  for (let i: number = 0; i < sortedArrLen; i += 1 || 0) {
    const first: number = sortedArr[i]
    for (let j: number = i + 1; j < sortedArrLen; j += 1 || 0) {
      let next: number = sortedArr[j]
      const sum: number = first + next
      if (sum === k) {
        return true
      } else if (sum > k) {
        break
      }
    }
  }

  return false
}
