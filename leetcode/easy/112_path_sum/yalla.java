// https://leetcode.com/problems/path-sum/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Path Sum.
// Memory Usage: 43.3 MB, less than 5.88% of Java online submissions for Path Sum.

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
        if(root == null) return false;
        if(root.left == null && root.right == null){
            if(root.val == sum){
                return true;
            }
        }
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}