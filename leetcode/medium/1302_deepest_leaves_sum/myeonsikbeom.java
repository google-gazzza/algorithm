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
 Runtime: 6ms
 Memroy:45.8MB
 */
class Solution {
    int maxHeight = 0;
    int sum = 0;
    public void getDeepestNode(TreeNode node,int height){
        if(node == null){
            return ;
        }
        if(node.left == null && node.right == null){
            if(height > maxHeight){
                sum=0;//더 아래의 값이 있을수도 있기떄문에 합계 초기화
                maxHeight = height;
                sum += node.val;
            }else if(height == maxHeight){
                sum += node.val;
            }
        }
        getDeepestNode(node.left,height+1);
        getDeepestNode(node.right,height+1);
        return;
    }
    public int deepestLeavesSum(TreeNode root) {
        getDeepestNode(root,0);
        return sum;
    }
}