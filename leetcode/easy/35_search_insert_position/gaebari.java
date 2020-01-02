// https://leetcode.com/problems/search-insert-position
//Runtime: 2 ms, faster than 100.00% of Java online submissions for Search Insert Position.
//Memory Usage: 39.2 MB, less than 100.00% of Java online submissions for Search Insert Position.

import java.util.ArrayList;

class Solution {
    public int searchInsert(int[] nums, int target) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i : nums) {
            list.add(i);
        }
        int result = list.indexOf(target);
        if (result == -1) {
            list.add(target);
        }
        Collections.sort(list);
        result = list.indexOf(target);

        return result;
    }
}