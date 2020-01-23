// https://leetcode.com/problems/symmetric-tree
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Symmetric Tree.
// Memory Usage: 40.4 MB, less than 6.12% of Java online submissions for Symmetric Tree.
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
    public boolean isSymmetric(TreeNode p) {
        if (p == null) {
            return true;
        }
        return check(p.left, p.right);
    }

    public boolean check(TreeNode l, TreeNode r) {
        if (l == null && r == null) {
            return true;
        }
        if (l == null || r == null) {
            return false;
        }

        return l.val == r.val && check(l.left, r.right) && check(l.right, r.left);
    }
}