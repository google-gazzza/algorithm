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
 https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
 runtime: 0ms
 memory: 43.47MB
 */
class Solution {
    int answer = 0;
    public int[] caculateAvgSubStrr(TreeNode root){
        if(root == null){
            return new int[]{0,0};
        }
        int[] leftVal = caculateAvgSubStrr(root.left);
        int[] rightVal = caculateAvgSubStrr(root.right);
        int sum = leftVal[0] + rightVal[0] + root.val;
        int count = leftVal[1] + rightVal[1] + 1;
        int avg = (int) sum / count ;
        if(avg == root.val){
            answer++;
        }
        return new int[]{sum,count};
    }

    public int averageOfSubtree(TreeNode root) {
        TreeNode node = root;
        caculateAvgSubStrr(node);


        return answer;
    }
}