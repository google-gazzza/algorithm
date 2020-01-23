// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 38.8 MB, less than 98.44% of Java online submissions for Minimum Depth of Binary Tree.

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
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        return getMinDepth(root, 1);
    }
    
    private int getMinDepth(TreeNode node, int level) {
        if (node == null) return Integer.MAX_VALUE;
        if (node.left == null && node.right == null) return level;
        
        int left = getMinDepth(node.left, level+1);
        int right = getMinDepth(node.right, level+1);
        
        return Math.min(left, right);
    }
}