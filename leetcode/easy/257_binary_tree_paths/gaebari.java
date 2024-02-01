//https://leetcode.com/problems/binary-tree-paths
//Runtime: 7 ms, faster than 54.47% of Java online submissions for Binary Tree Paths.
//Memory Usage: 38.9 MB, less than 5.55% of Java online submissions for Binary Tree Paths.
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> ls = new ArrayList<String>();
        List<Integer> path = new ArrayList<Integer>();
        this.search(path, ls, root);
        return ls;
    }

    private void search(List<Integer> path, List<String> ls, TreeNode n) {
        if (n == null) return;

        path.add(n.val);
        int pathSize = path.size();

        if (n.left == null && n.right == null) {
            String string_path = "";
            for (int i = 0; i <  path.size() -1 ; i++) {
                string_path += Integer.toString(path.get(i)) + "->";
            }
            string_path += Integer.toString(path.get(path.size() -1)) ;

            ls.add(string_path);
        } else {
            search(path, ls, n.left);
            search(path, ls, n.right);
        }
        path.remove(pathSize -1);
    }
}