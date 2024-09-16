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
/**
 https://leetcode.com/problems/range-sum-of-bst/
 runtime : 1ms
 Memory: 48.7MB
 */
class Solution {
    int sum = 0;
    public void bfs(TreeNode root,int low, int high){
        if(root==null){
            return;
        }
        if(root.val >= low && root.val <= high){
            sum += root.val;
        }
        bfs(root.left,low, high);
        bfs(root.right,low, high);

    }
    public int rangeSumBST(TreeNode root, int low, int high) {
        bfs(root,low,high);
        return sum;
    }
}