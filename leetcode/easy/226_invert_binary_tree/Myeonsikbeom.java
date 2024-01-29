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
    public TreeNode invertTree(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()){
            TreeNode node = q.poll();
            TreeNode tmp = null;
            if(node ==null){
                continue;
            }
            if(node.left != null && node.right != null){
                tmp = node.left;
                node.left = node.right;
                node.right = tmp;
                q.offer(node.right);
                q.offer(node.left);
            }else if(node.left != null){
                q.offer(node.left);
                node.right = node.left;
                node.left = null;
            }else if(node.right != null){
                q.offer(node.right);
                node.left = node.right;
                node.right = null;
            }

        }
        return root;
    }
}