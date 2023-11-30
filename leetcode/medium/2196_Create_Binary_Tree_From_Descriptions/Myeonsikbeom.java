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
 runtime:64ms
 memory: 55.35mb */
class Solution {
    public TreeNode createBinaryTree(int[][] descriptions) {
        TreeNode answer = new TreeNode();
        Map<Integer,TreeNode> treeMap = new HashMap<>();//parent를 키로 만들어서 트리 구조를 담을 맵
        HashSet<Integer> children = new HashSet<>();//child노드값
        int len = descriptions.length;
        for(int i=0;i<len;i++){
            int parent = descriptions[i][0];
            int child = descriptions[i][1];
            int isLeft = descriptions[i][2];
            //트리만들기.
            children.add(child);//child만 넣음.
            TreeNode node = treeMap.getOrDefault(parent, new TreeNode(parent));
            if(isLeft == 1){
                node.left = treeMap.getOrDefault(child,new TreeNode(child));
                treeMap.put(child, node.left);
            }else{
                node.right = treeMap.getOrDefault(child,new TreeNode(child));
                treeMap.put(child, node.right);
            }

            treeMap.put(parent, node);
        }
        //최상단 데이터를 가리기 위한 작업
        int root = 0;
        for(int i=0; i<len; i++){
            if(!children.contains(descriptions[i][0])){
                root = descriptions[i][0];
                break;
            }
        }
        return treeMap.get(root);
    }
}