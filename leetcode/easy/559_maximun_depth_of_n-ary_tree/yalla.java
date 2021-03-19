// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Runtime: 1 ms, faster than 45.52% of Java online submissions for Maximum Depth of N-ary Tree.
// Memory Usage: 38.8 MB, less than 94.48% of Java online submissions for Maximum Depth of N-ary Tree.

class Solution {
	public int maxDepth(Node root) {
		if(root == null) return 0;
		Queue<Node> q = new LinkedList<>();
		q.offer(root);
		int ret = 0;

		while(!q.isEmpty()){
			ret++;
			int size = q.size();
			for(int i = 0; i < size; i++){
				Node node = q.poll();

				for(Node inner : node.children){
					q.offer(inner);
				}
			}
		}
		return ret;
	}
}