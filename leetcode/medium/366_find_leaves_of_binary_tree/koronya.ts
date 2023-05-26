// [Medium] 366. Find Leaves of Binary Tree
// 366_find_leaves_of_binary_tree

// https://leetcode.com/problems/find-leaves-of-binary-tree
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Find Leaves of Binary Tree.
// Memory Usage: 40.8 MB, less than 6.25% of TypeScript online submissions for Find Leaves of Binary Tree.

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

function findLeaves(root: TreeNode | null): number[][] {
  const levelMap = new Map<number, number[]>()
  const dfs = (node: TreeNode | null): number => {
    if (node == null) {
      return 0
    }
    const level = Math.max(dfs(node.left), dfs(node.right))
    if (levelMap.has(level)) {
      levelMap.get(level)!.push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    return level + 1
  }
  dfs(root)

  return [...levelMap].map((item) => item[1])
}
