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
/*
https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/
runtime : 8ms
Memory: 50.49 MB
*/
class Solution {

    public TreeNode reverseOddLevels(TreeNode root) {
        if(root == null){
            return null;
        }
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int level = 0;
        while(!q.isEmpty()){
            int size = q.size();
            while(size-- > 0){
                TreeNode node = q.poll();
                if(node.left != null) q.offer(node.left);
                if(node.right != null) q.offer(node.right);

            }
            level++;
            if(level %2 == 1 && !q.isEmpty()){
                int[] arr = new int[q.size()];
                int i=0;
                for(TreeNode node : q){
                    arr[i++]=node.val;
                }
                int j = q.size()-1;
                for(TreeNode node : q){
                    node.val = arr[j--];
                }
            }
        }
        return root;
    }
}