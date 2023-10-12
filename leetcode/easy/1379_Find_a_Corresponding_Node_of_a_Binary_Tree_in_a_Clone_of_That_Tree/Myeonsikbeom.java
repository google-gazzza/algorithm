/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
/**
 https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 runtime: 1ms
 memory: 48.3mb
 */
class Solution {
    TreeNode answer;
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        if(original == null){
            return null;
        }
        dfs(original, cloned, target);
        return answer;
    }
    public void dfs(TreeNode original, TreeNode cloned, TreeNode target){
        if(original == null){
            return;
        }
        dfs(original.left,cloned.left,target);
        if(original.val == target.val){
            answer = cloned;
        }
        dfs(original.right,cloned.right,target);
    }
}