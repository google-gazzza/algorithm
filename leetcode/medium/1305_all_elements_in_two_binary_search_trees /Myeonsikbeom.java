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
 https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 Runtime:16ms
 memory:45.94mb
 */
class Solution {
    public void getValAndAdd(TreeNode node, List<Integer> answer){
        if(node == null){
            return;
        }
        answer.add(node.val);
        getValAndAdd(node.left,answer);
        getValAndAdd(node.right,answer);
    }

    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        List<Integer> answer = new ArrayList<>();
        //각 트리에 값을 추출하여 list에 삽입
        getValAndAdd(root1,answer);
        getValAndAdd(root2,answer);
        Collections.sort(answer);//list에 삽입된 목록들을 정렬
        return answer;
    }
}