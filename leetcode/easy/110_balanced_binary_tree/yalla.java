//https://leetcode.com/problems/balanced-binary-tree/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Balanced Binary Tree.
//Memory Usage: 39.6 MB, less than 70.37% of Java online submissions for Balanced Binary Tree.
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
        return depth(root) == -1 ? false : true;
    }

    private int depth(TreeNode root){
        if(root == null) return 0;

        int left = depth(root.left);
        int right = depth(root.right);

        if(Math.abs(left - right) > 1|| left == -1 || right == -1 ) return -1;

        return Math.max(left,right) +1;
    }
}