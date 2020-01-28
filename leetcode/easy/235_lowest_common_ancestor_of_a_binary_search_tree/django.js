/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
Runtime: 84 ms, faster than 43.80% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 43.9 MB, less than 20.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if (root == null){
        return null
    }

    if (root.val == p.val || root.val == q.val){
        return root;
    }

    var leftCommon = lowestCommonAncestor(root.left, p, q);
    var rightCommon = lowestCommonAncestor(root.right, p, q);

    if (leftCommon != null && rightCommon != null){
        return root;
    }else if (leftCommon == null && rightCommon == null){
        return null
    }else if (leftCommon == null){
        return rightCommon;
    }else if (rightCommon == null){
        return leftCommon;
    }

};
