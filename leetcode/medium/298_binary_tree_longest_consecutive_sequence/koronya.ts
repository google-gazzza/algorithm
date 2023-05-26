// [Medium] 298. Binary Tree Longest Consecutive Sequence
// 298_binary_tree_longest_consecutive_sequence

// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence
// Runtime: 141 ms, faster than 50.00% of TypeScript online submissions for Binary Tree Longest Consecutive Sequence.
// Memory Usage: 65 MB, less than 50.00% of TypeScript online submissions for Binary Tree Longest Consecutive Sequence.

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

function longestConsecutive(root: TreeNode | null): number {
  let max = 0;
  const preOrderTraversal = (
    node: TreeNode | null,
    count = 0,
    prev: number = 0
  ) => {
    if (node == null) {
      return;
    }
    const nodeVal = node.val;
    if (count === 0 || nodeVal === prev + 1) {
      count += 1;
    } else {
      count = 1;
    }
    max = Math.max(max, count);
    prev = nodeVal;
    preOrderTraversal(node.left, count, prev);
    preOrderTraversal(node.right, count, prev);
  };
  preOrderTraversal(root);

  return max;
}
