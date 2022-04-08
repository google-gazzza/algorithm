// [Medium] 549. Binary Tree Longest Consecutive Sequence II
// 549_binary_tree_longest_consecutive_sequence_ii

// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii
// Runtime: 81 ms, faster than 73.33% of JavaScript online submissions for Binary Tree Longest Consecutive Sequence II.
// Memory Usage: 47.5 MB, less than 66.67% of JavaScript online submissions for Binary Tree Longest Consecutive Sequence II.

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
  let result = 0;
  const dfs = (node) => {
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
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

longestConsecutive(root);

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);

longestConsecutive(root2);
