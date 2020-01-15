//https://leetcode.com/problems/single-number/
//Runtime: 10 ms, faster than 10.42% of Java online submissions for Single Number.
//Memory Usage: 39.9 MB, less than 96.30% of Java online submissions for Single Number.

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