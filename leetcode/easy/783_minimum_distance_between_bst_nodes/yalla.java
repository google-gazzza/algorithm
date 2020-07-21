//https://leetcode.com/problems/minimum-distance-between-bst-nodes/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Minimum Distance Between BST Nodes.
//Memory Usage: 37 MB, less than 57.91% of Java online submissions for Minimum Distance Between BST Nodes.
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    Integer diff = Integer.MAX_VALUE;
    Integer preVal = null;
    public int minDiffInBST(TreeNode root) {
        if(root == null) return 0;

        if(root.left != null){
            minDiffInBST(root.left);
        }
        if(preVal != null){
            diff = Math.min(root.val - preVal, diff);
        }
        preVal = root.val;
        if(root.right != null){
            minDiffInBST(root.right);
        }
        return diff;
    }
}