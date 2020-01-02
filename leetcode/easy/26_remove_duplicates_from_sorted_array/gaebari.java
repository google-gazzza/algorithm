// https://leetcode.com/problems/remove-duplicates-from-sorted-array
// Runtime: 5 ms, faster than 7.13% of Java online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 40.6 MB, less than 69.68% of Java online submissions for Remove Duplicates from Sorted Array.

import java.util.HashSet;
import java.util.Arrays;

class Solution {
    public int removeDuplicates(int[] nums) {
        HashSet set = new HashSet();

        for (int i : nums) {
            set.add(i);
        }
        int size = set.size();
        int count = 0;
        Iterator<Integer> it = set.iterator();
        int[] tmp = new int[set.size()];

        while (it.hasNext()){
            tmp[count++] = it.next();
        }

        Arrays.sort(tmp);

        for (int i = 0; i < set.size()  ; i++) {
            nums[i] = tmp[i];
        }

        return size;
    }
}