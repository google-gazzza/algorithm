// https://leetcode.com/problems/balanced-binary-tree/
// Runtime: 1 ms, faster than 98.66% of Java online submissions for Balanced Binary Tree.
// Memory Usage: 36.7 MB, less than 100.00% of Java online submissions for Balanced Binary Tree.

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
    public boolean isBalanced(TreeNode root) {
        return getDepth(root) > -1;
    }
    
    private int getDepth(TreeNode node) {
        if (node == null) return 0;
        
        int left = getDepth(node.left);
        int right = getDepth(node.right);
        
        if (left == -1 || right == -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        
        return Math.max(left, right) + 1;
    }
}