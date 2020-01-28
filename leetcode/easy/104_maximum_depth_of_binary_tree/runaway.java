// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 42.8 MB, less than 5.38% of Java online submissions for Maximum Depth of Binary Tree.

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
    public int maxDepth(TreeNode root) {
        return helper(root);
    }
    
    int helper(TreeNode node) {
        if (node == null) return 0;
        return Math.max(helper(node.left), helper(node.right)) + 1;
    }
}