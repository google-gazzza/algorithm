// https://leetcode.com/problems/binary-tree-paths/
// Runtime: 52 ms, faster than 93.43% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Binary Tree Paths.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const list = [];
    helper(root, null, list);
    return list;
};


function helper(node, str, list) {
    if (node === null){
        return;
    }
    
    str = !str ? `${node.val}` : `${str}->${node.val}`;
    
    if (node.left === null && node.right === null){
        list.push(str);
        return;
    }
    
    helper(node.left, str, list);
    helper(node.right, str, list);  
}