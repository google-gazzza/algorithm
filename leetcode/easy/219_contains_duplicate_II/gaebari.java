//https://leetcode.com/problems/contains-duplicate-ii
//Runtime: 4 ms, faster than 98.52% of Java online submissions for Contains Duplicate II.
//Memory Usage: 44.4 MB, less than 21.05% of Java online submissions for Contains Duplicate II.

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> set = new HashSet<Integer>();
        for(int i=0; i < nums.length; i++) {
            if (i > k) set.remove(nums[i-k-1]);
            if (!set.add(nums[i])) return true;
        }
        return false;
    }
}