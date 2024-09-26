// [Medium] 549. Binary Tree Longest Consecutive Sequence II
// 549_binary_tree_longest_consecutive_sequence_ii

// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii
// Runtime: 123 ms, faster than 50.00% of TypeScript online submissions for Binary Tree Longest Consecutive Sequence II.
// Memory Usage: 48.7 MB, less than 100.00% of TypeScript online submissions for Binary Tree Longest Consecutive Sequence II.

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
  let result = 0;
  const dfs = (node: TreeNode | null): [number, number] => {
    if (!node) {
      return [0, 0];
    }
    const nodeVal = node.val;
    const leftChild = node.left;
    const rightChild = node.right;
    const [leftInc, leftDec] = dfs(leftChild);
    const [rightInc, rightDec] = dfs(rightChild);
    let inc = 1;
    let dec = 1;
    if (leftChild) {
      const leftChildVal = leftChild.val;
      if (nodeVal === leftChildVal + 1) {
        inc = leftInc + 1;
      } else if (nodeVal === leftChildVal - 1) {
        dec = leftDec + 1;
      }
    }
    if (rightChild) {
      const rightChildVal = rightChild.val;
      if (nodeVal === rightChildVal + 1) {
        inc = Math.max(inc, rightInc + 1);
      } else if (nodeVal === rightChildVal - 1) {
        dec = Math.max(dec, rightDec + 1);
      }
    }
    result = Math.max(result, inc + dec - 1);
    return [inc, dec];
  };

  dfs(root);

  return result;
}
