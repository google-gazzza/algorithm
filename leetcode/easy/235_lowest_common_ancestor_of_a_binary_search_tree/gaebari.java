//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
//Runtime: 4 ms, faster than 97.77% of Java online submissions for Lowest Common Ancestor of a Binary Search Tree.
//Memory Usage: 42.1 MB, less than 5.10% of Java online submissions for Lowest Common Ancestor of a Binary Search Tree.
public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if( root.val > p.val && root.val > q.val){
            return lowestCommonAncestor(root.left, p, q);
        } else if ( root. val < p.val && root.val < q.val){
            return lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
    }
}
