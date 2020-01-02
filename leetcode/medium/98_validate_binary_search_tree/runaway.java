// https://leetcode.com/problems/validate-binary-search-tree/
// Runtime: 0 ms, Your runtime beats 100.00 % of java submissions.
// Memory Usage: 38.8 MB, Your memory usage beats 82.33 % of java submissions.

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
    public boolean isValidBST(TreeNode root) {
        return checkBST(root, null, null);
    }
    
    private boolean checkBST(TreeNode node, Integer min, Integer max) {
        if (node == null) return true;
        
        if (min != null && min >= node.val) return false;
        if (max != null && max <= node.val) return false;
        
        return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
    }
}