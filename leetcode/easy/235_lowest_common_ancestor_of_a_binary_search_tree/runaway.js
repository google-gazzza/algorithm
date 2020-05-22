// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Runtime: 76 ms, faster than 81.31% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 43.8 MB, less than 20.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

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
    const queue = [];
    const high = p.val > q.val ? p.val : q.val;
    const low = p.val > q.val ? q.val : p.val;
    
    queue.push(root);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node.val >= low && node.val <= high)
            return node;
        
        if (node.left !== null)
            queue.push(node.left);
        if (node.right !== null)
            queue.push(node.right);
    }
    
    return null;
};