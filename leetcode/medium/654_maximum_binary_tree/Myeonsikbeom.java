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
 https://leetcode.com/problems/maximum-binary-tree/
 runtime: 13ms
 memory:44.24MB
 */
class Solution {
    //제일빠른 코드
//    public TreeNode constructMaximumBinaryTree(int[] nums) {
//        return construct(0,nums.length-1,nums);
//
//    }
//
//    public TreeNode construct(int start,int end,int[]nums){
//        if(start>end){
//            return null;
//        }
//        int root=0;
//        int rootInd=0;
//
//        for(int i=start;i<=end;i++){//가장큰수와큰수의 위치를 가져오는 과정.
//            if(nums[i]>=root){
//                root=nums[i];
//                rootInd=i;
//            }
//        }
//
//        TreeNode head=new TreeNode(root);
//        head.left=construct(start,rootInd-1,nums);//가장큰수 위치기준 왼쪽 트리 생성
//        head.right=construct(rootInd+1,end,nums);//가장큰수 위치 기준 오른쪽 트리 생성
//        return head;
//    }
    //내가작성한 코든
    public void renderTree(int[] numArr,TreeNode resultNode){
        if(numArr == null || numArr.length == 0){
            return;
        }

        Integer maxValue = Arrays.stream(numArr)
                .max()
                .getAsInt();

        int[] leftArr = null;
        int[] rightArr = null;
        if(maxValue == 0){
            return;
        }
        for(int i=0;i<numArr.length;i++){
            if(numArr[i]==maxValue){
                leftArr = Arrays.copyOfRange(numArr, 0, i);
                rightArr = Arrays.copyOfRange(numArr, i+1, numArr.length);
                break;
            }
        }
        resultNode.val = maxValue;

        resultNode.left = leftArr.length == 0 ? null : new TreeNode();
        resultNode.right = rightArr.length == 0 ? null : new TreeNode();
        renderTree(leftArr,resultNode.left);
        renderTree(rightArr,resultNode.right);
    }
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        TreeNode resultNode = new TreeNode();
        renderTree(nums,resultNode);
        return resultNode;
    }
}