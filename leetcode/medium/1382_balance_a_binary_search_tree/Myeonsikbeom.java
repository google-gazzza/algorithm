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
 https://leetcode.com/problems/balance-a-binary-search-tree/
 runtime:2ms
 memory:45.92mb
 */
class Solution {
    public void extractTreeVal(TreeNode current,List<Integer> bstValueList){
        if(current != null){
            extractTreeVal(current.left,bstValueList);
            bstValueList.add(current.val);
            extractTreeVal(current.right,bstValueList);
        }
    }
    public TreeNode createBST(TreeNode tree,List<Integer> bstValueList,int start, int end){
        if(start > end){
            return null;
        }
        int mid = (start+end) / 2;
        tree = new TreeNode(bstValueList.get(mid));
        tree.left = createBST(tree.left,bstValueList,start,mid-1);
        tree.right = createBST(tree.right,bstValueList,mid+1,end);
        return tree;
    }
    public TreeNode balanceBST(TreeNode root) {
        int rootVal = root.val;
        List<Integer> bstValueList = new ArrayList<>();
        extractTreeVal(root,bstValueList);
        TreeNode answer = new TreeNode();
        return createBST(answer,bstValueList,0,bstValueList.size()-1);
    }
}