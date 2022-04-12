// [Easy] 2236. Root Equals Sum of Children
// 2236_root_equals_sum_of_children

// https://leetcode.com/problems/root-equals-sum-of-children
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Root Equals Sum of Children.
// Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Root Equals Sum of Children.

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
 * @return {boolean}
 */
const checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(10);
root.left = new TreeNode(4);
root.right = new TreeNode(6);

checkTree(root);
