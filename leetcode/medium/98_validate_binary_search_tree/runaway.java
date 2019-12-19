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
        if (root == null) {
            return true;
        } 
        else if (!checkBST(root)){
            return false;
        }
        else {
            return isValidBST(root.left) && isValidBST(root.right);   
        }
    }
    
    private boolean checkBST(TreeNode node) {
        boolean b1 = node.left == null || node.left.val < node.val;
        boolean b2 = node.right == null || node.right.val > node.val;
        return b1 && b2;
    }
}