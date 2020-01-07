// https://leetcode.com/problems/path-sum/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Path Sum.
// Memory Usage: 38.1 MB, less than 89.41% of Java online submissions for Path Sum.

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
    public boolean hasPathSum(TreeNode root, int sum) {
        return checkPathSum(root, sum, 0);
    }
    private boolean checkPathSum(TreeNode node, int target, int sum) {
        if (node == null) return false;
        sum += node.val;
        if (node.left == null && node.right == null) return sum == target;
        return checkPathSum(node.left, target, sum) 
            || checkPathSum(node.right, target, sum);
    }
}