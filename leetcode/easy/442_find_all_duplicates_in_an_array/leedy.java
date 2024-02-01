//https://leetcode.com/problems/find-all-duplicates-in-an-array/
//Runtime: 26 ms, faster than 13.63% of Java online submissions for Find All Duplicates in an Array.
//Memory Usage: 53.9 MB, less than 13.89% of Java online submissions for Find All Duplicates in an Array.

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        for(int num : nums){
          map.put(num,map.getOrDefault(num,0)+1);
        }
        for(int temp : map.keySet()){
            if(1<map.get(temp)){
                result.add(temp);
            }
        }
        return result;
    }
}
