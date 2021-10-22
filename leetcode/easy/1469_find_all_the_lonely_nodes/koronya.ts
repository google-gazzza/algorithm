// [Easy] 1469. Find All The Lonely Nodes
// 1469_find_all_the_lonely_nodes

// https://leetcode.com/problems/find-all-the-lonely-nodes
// Runtime: 138 ms, faster than 33.33% of TypeScript online submissions for Find All The Lonely Nodes.
// Memory Usage: 44.8 MB, less than 66.67% of TypeScript online submissions for Find All The Lonely Nodes.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getLonelyNodes(root: TreeNode | null): number[] {
  const resultArr: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (node == null) {
      return
    }
    const nodeLeft: TreeNode | null = node.left
    const nodeRight: TreeNode | null = node.right
    if (nodeLeft == null && nodeRight != null) {
      resultArr.push(nodeRight.val)
      dfs(nodeRight)
    } else if (nodeLeft != null && nodeRight == null) {
      resultArr.push(nodeLeft.val)
      dfs(nodeLeft)
    } else {
      dfs(nodeLeft)
      dfs(nodeRight)
    }
  }
  dfs(root)

  return resultArr
}
