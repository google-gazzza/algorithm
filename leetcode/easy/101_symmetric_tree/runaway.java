// https://leetcode.com/problems/symmetric-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Symmetric Tree.
// Memory Usage: 40.9 MB, less than 5.44% of Java online submissions for Symmetric Tree.

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
    public boolean isSymmetric(TreeNode root) {
        if (root == null)
            return true;
        return check(root.left, root.right);
    }
    
    private boolean check(TreeNode n1, TreeNode n2) {
        if (n1 == null || n2 == null)
            return n1 == n2;
        else if (n1.val != n2.val)
            return false;
        
        return check(n1.left, n2.right) && check(n1.right, n2.left);
    }
}