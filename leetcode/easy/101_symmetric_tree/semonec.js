// https://leetcode.com/problems/symmetric-tree/submissions/
// Runtime: 56 ms, faster than 89.13% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 35.9 MB, less than 20.00% of JavaScript online submissions for Symmetric Tree.
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
var isSymmetric = function(root) {
    let isDfs = (left, right) => {
        if (!left && right || left && !right) return false;
        if (!left && !right) return true;
        
        return left.val === right.val && isDfs(left.right, right.left) && isDfs(left.left, right.right);
    }
    return isDfs(root, root);
};