// https://leetcode.com/problems/balanced-binary-tree
// Runtime: 1 ms, faster than 98.66% of Java online submissions for Balanced Binary Tree.
// Memory Usage: 38.2 MB, less than 93.52% of Java online submissions for Balanced Binary Tree.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null)
            return true;

        if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1)
            return false;

        return isBalanced(root.left) && isBalanced(root.right);
    }

    public int maxDepth(TreeNode root) {
        if (root == null)
            return 0;

        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}