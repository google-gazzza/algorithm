// [Medium] 298. Binary Tree Longest Consecutive Sequence
// 298_binary_tree_longest_consecutive_sequence

// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence
// Runtime: 84 ms, faster than 98.90% of JavaScript online submissions for Binary Tree Longest Consecutive Sequence.
// Memory Usage: 59.2 MB, less than 90.11% of JavaScript online submissions for Binary Tree Longest Consecutive Sequence.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestConsecutive = function (root) {
  let max = 0;
  const preOrderTraversal = (node, count = 0, prev) => {
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
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);

longestConsecutive(root);
