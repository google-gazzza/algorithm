// https://leetcode.com/problems/minimum-depth-of-binary-tree
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 38.9 MB, less than 98.44% of Java online submissions for Minimum Depth of Binary Tree

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
        if(root == null) return 0;
        int left = minDepth(root.left);
        int right = minDepth(root.right);
        return ( (left == 0 || right == 0) ? left + right : Math.min(left,right) ) + 1;
    }
}