// https://leetcode.com/problems/same-tree
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Same Tree.
// Memory Usage: 34.4 MB, less than 100.00% of Java online submissions for Same Tree.

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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        return check(p, q);
    }
    
    private boolean check(TreeNode p, TreeNode q) {
        if (p == null || q == null) {
            return p == q;
        }
        else if (p.val != q.val) {
            return false;
        }
        
        return check(p.left, q.left) && check(p.right, q.right);
    }
}