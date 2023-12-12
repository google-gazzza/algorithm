/**  https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array */
class Solution {
    public int maxProduct(int[] nums) {
        Queue<Integer> q = new PriorityQueue<>(Collections.reverseOrder());
        for(int n : nums){
            q.add(n);
        }
        Integer max1 = q.poll();
        Integer max2 = q.poll();
        return (max1-1) * (max2-1);
    }
}