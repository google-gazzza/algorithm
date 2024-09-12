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
 https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
 Runtime: 0ms
 Memory : 40.21MB
 */
class Solution {
    int sum =0;
    public TreeNode bstToGst(TreeNode tree) {
        if(tree.right != null){
            bstToGst(tree.right);
        }
        int treeValue = tree.val;
        sum = sum + treeValue;
        tree.val = sum;
        if(tree.left != null){
            bstToGst(tree.left);
        }
        return tree;
    }
}