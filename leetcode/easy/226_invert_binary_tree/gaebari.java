//https://leetcode.com/problems/invert-binary-tree/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Invert Binary Tree.
//Memory Usage: 37.2 MB, less than 5.10% of Java online submissions for Invert Binary Tree.
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
        if (root == null) {
            return null;
        }

        TreeNode right = root.right, left = root.left;
        root.left = invertTree(right);
        root.right = invertTree(left);

        return root;
    }
}


