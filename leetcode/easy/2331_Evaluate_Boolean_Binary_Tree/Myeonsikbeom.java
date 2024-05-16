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
 Runtime:0ms,
 Memory:44.42MB
 https://leetcode.com/problems/evaluate-boolean-binary-tree/?envType=daily-question&envId=2024-05-16
 */
class Myeonsikbeom {
    public boolean returnBooleanNode(TreeNode node){
        if(node == null){
            return false;
        }
        int val = node.val;
        if(val == 0){
            return false;
        }else if(val == 1){
            return true;
        }else if(val == 2){
            return returnBooleanNode(node.left) || returnBooleanNode(node.right);
        }else if(val == 3){
            return returnBooleanNode(node.left) && returnBooleanNode(node.right);
        }
        return false;
    }
    public boolean evaluateTree(TreeNode root) {
        return returnBooleanNode(root);
    }
}