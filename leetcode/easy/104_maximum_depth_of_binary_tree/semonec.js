// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
// Runtime: 60 ms, faster than 78.65% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.1 MB, less than 53.13% of JavaScript online submissions for Maximum Depth of Binary Tree.
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
var maxDepth = function(root) {
    if (!root) return 0;
    let getDepth = (node, level) => {
        let leftDepth = node.left ? getDepth(node.left, level + 1) : level;
        let rightDepth = node.right ? getDepth(node.right, level + 1) : level;
        return Math.max(leftDepth, rightDepth);
    }
    return getDepth(root, 1);
};