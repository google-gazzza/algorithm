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
 https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 runtime: 0ms
 memory: 40.61MB
 */
class Solution {
    public TreeNode add(int value,TreeNode result){
        if(result == null){
            result = new TreeNode(value);

        } else if(value < result.val){
            result.left = add(value,result.left);
        }else{
            result.right = add(value,result.right);
        }
        return result;
    }
    public TreeNode bstFromPreorder(int[] preorder) {
        TreeNode result = null;
        for(int i=0;i<preorder.length;i++){
            result = add(preorder[i],result);
        }
        return result;
    }
}