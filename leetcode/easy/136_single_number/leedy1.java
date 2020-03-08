//https://leetcode.com/problems/single-number/submissions/
//Runtime: 11 ms, faster than 7.91% of Java online submissions for Single Number.
//Memory Usage: 50.1 MB, less than 5.19% of Java online submissions for Single Number.

class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i : nums) {
        	map.put(i, map.getOrDefault(i,0)+1);
        }
        for(int k : map.keySet()) {
        	if(map.get(k)==1) return k;
        }
        
        return 0;
    }
}
