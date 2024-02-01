// https://leetcode.com/problems/invert-binary-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Invert Binary Tree.
// Memory Usage: 37 MB, less than 5.10% of Java online submissions for Invert Binary Tree.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        invertHelper(root);
        return root;
    }
    
    void invertHelper(TreeNode node) {
        if (node == null)
            return;
        
        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        invertHelper(node.left);
        invertHelper(node.right);
    }
}