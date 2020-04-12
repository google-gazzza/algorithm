//https://leetcode.com/problems/contains-duplicate
//Runtime: 7 ms, faster than 63.43% of Java online submissions for Contains Duplicate.
//Memory Usage: 45.4 MB, less than 5.17% of Java online submissions for Contains Duplicate.
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<Integer>();
        for (int i=0; i < nums.length; i++) {
            if (set.contains(nums[i])) {
                return true;
            }
            set.add(nums[i]);
        }
        return false;
    }
}