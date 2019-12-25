// https://leetcode.com/problems/pascals-triangle-ii/
// Runtime: 1 ms, faster than 90.32% of Java online submissions for Pascal's Triangle II.
// Memory Usage: 33.8 MB, less than 6.17% of Java online submissions for Pascal's Triangle II.

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> list = new ArrayList<Integer>();
        for (int y = 0; y <= rowIndex; y++) {
            list.add(1);
            int prev = list.get(0);
            for (int x = 1; x < y; x++) {
                int value = prev + list.get(x);
                prev = list.get(x);
                list.set(x, value);
            }
        }
        return list;
    }
}