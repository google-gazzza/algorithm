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
 https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 Runtime: 1ms
 Memory: 44.35MB
 */
class Solution {
    int sum = 0;
    public void sumVal(TreeNode node){
        if(node ==null){
            return;
        }
        if(node.val %2 == 0){
            if(node.left != null && node.left.left != null){
                sum += node.left.left.val;
            }
            if(node.left != null && node.left.right != null){
                sum += node.left.right.val;
            }
            if(node.right != null && node.right.left != null){
                sum += node.right.left.val;
            }
            if(node.right != null && node.right.right != null){
                sum += node.right.right.val;
            }
        }
        sumVal(node.left);
        sumVal(node.right);

    }
    public int sumEvenGrandparent(TreeNode root) {
        sumVal(root);
        return sum;
    }
}